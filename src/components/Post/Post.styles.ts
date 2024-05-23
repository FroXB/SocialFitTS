import styled from 'styled-components';

export const Post = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfo = styled.div`
  strong {
    display: block;
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;

export const Content = styled.div`
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: var(--orange-500);
    text-decoration: none;

    &:hover {
      color: var(--orange-300);
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 1rem;

  button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 2px;

    &:hover {
      color: var(--orange-300);
    }

    svg {
      margin-right: 0.5rem;
    }

    span::before {
      content: "\\2022";
      padding: 0 0.25rem;
    }
  }
`;
