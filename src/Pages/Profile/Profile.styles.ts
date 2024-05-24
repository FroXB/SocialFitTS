import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 80rem;
  margin: 2rem auto 2rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: flex-start;
`;

export const Title = styled.p`
    background: var(--gray-800);
    margin-bottom: 2rem;
    border-radius: 1rem;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`