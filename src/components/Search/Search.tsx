import { X } from 'phosphor-react';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { SearchContainer, SearchResultsOverlay, SearchResultsContainer, UserDetails, ProfileName, ProfileUsername } from './Search.styles';

export function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  interface User {
    id: number;
    name: string;
    username: string;
    avatarUrl: string;
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  async function handleSearchSubmit(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && searchText.startsWith('@')) {
      event.preventDefault();
      const query = searchText.slice(1); // remove o '@'
      
      // Fetch users from the backend
      try {
        const response = await fetch(`https://api.yourbackend.com/users?username=${query}`);
        const data: User[] = await response.json();
        setSearchResults(data);
        setIsResultsVisible(true);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }

  function handleCloseResults() {
    setIsResultsVisible(false);
    setSearchText('');
    setSearchResults([]);
  }

  return (
    <div>
      <SearchContainer
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={handleSearchSubmit}
        placeholder="Pesquisar usuário"
      />
      {isResultsVisible && (
        <SearchResultsOverlay>
          <SearchResultsContainer>
            <X 
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                cursor: 'pointer'
              }}
              size={32}
              onClick={handleCloseResults}
            />
            {searchResults.map(user => (
              <UserDetails key={user.id}>
                <img src={user.avatarUrl} alt={user.name} />
                <ProfileName>{user.name}</ProfileName>
                <ProfileUsername>@{user.username}</ProfileUsername>
              </UserDetails>
            ))}
          </SearchResultsContainer>
        </SearchResultsOverlay>
      )}
    </div>
  );
}