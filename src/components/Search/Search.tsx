import React, { useState } from 'react';
import { X } from 'phosphor-react';

import { SearchContainer, SearchBoxOverlay, SearchBoxContainer } from './Search.styles';

export function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsSearchOpen(true);
      setSearchText('');
    }
  };

  const handleClose = () => {
    setIsSearchOpen(false);
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
          <SearchBoxContainer>
            <X
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                cursor: 'pointer',
              }}
              size={32}
              onClick={handleClose}
            />
            {/* Conteúdo da caixa de pesquisa */}
          </SearchBoxContainer>
        </SearchBoxOverlay>
      )}
    </>
  );
}