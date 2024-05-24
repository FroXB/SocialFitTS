import React, { useState } from 'react';
import { Plus } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar'

import { SearchContainer, SearchBoxOverlay, UserList, UserItem, UserInfo, UserName, UserRole, Line } from './Search.styles';

export function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const users = [
    {
      name: 'Nome',
      role: '@Usuario',
      avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=66509be7&is=664f4a67&hm=7e2297b18f5f9c0191196b9262d700c520605e2e39410d10b1e35cc1de3ab510&=&format=webp&quality=lossless',
    },
  ];

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsSearchOpen(true);
      setSearchText('');
    }
  };

  const handleClose = () => {
    setIsSearchOpen(false);
  };

  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <SearchContainer
        type="text"
        placeholder="Pesquisar usuário"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isSearchOpen}
      />
      {isSearchOpen && (
        <SearchBoxOverlay onClick={handleClose}>
          <UserList onClick={handleBoxClick}>
            {users.map((user, index) => (
              <>
                <UserItem key={index} >
                  <Avatar src={user.avatarUrl} alt={`${user.name}'s avatar`} />
                  <UserInfo>
                    <UserName>{user.name}</UserName>
                    <UserRole>{user.role}</UserRole>
                  </UserInfo>
                  <Plus size={24} style={{ cursor: 'pointer' }} onClick={() => console.log('Add user')} />
                </UserItem>
                {index !== users.length -1 && <Line />}
              </>
            ))}
          </UserList>
        </SearchBoxOverlay>
      )}
    </>
  );
}