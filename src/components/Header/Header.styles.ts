import styled from 'styled-components';

export const Header = styled.header`
  background: var(--gray-800);
  display: flex;
  padding: 1.25rem 0;
  align-items: center; /* Para centralizar verticalmente os ícones */
`;

export const LeftIcon = styled.div`
  margin-left: 2rem;
`;

export const CenterIcons = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  
  & > *:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const VerticalLine = styled.div`
  width: .2rem;
  height: 3rem; 
  background-color: #FF9000; 

`;