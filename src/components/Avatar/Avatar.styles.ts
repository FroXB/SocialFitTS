import styled from 'styled-components';

export const Avatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
`;

export const AvatarWithBorder = styled.img`
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--orange-500);
`;
