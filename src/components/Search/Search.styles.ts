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