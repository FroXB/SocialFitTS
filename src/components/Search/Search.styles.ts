import styled from 'styled-components';

export const SearchContainer = styled.input`
    background: var(--gray-800);
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 1rem;
    color: white;

    &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--orange-500);
        border-radius: 1rem;
    }
`;

export const SearchResultsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const SearchResultsContainer = styled.div`
  background: var(--gray-800);
  padding: 2rem;
  border-radius: 8px;
  width: 30rem;
  position: relative;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
`;

export const ProfileName = styled.strong`
  color: var(--gray-100);
  line-height: 1.6;
`;

export const ProfileUsername = styled.span`
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
`;