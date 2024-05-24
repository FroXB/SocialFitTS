import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const Cover = styled.img`
  width: 100%;
  height: 5rem;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 7rem;
  margin-top: 1rem;
`;

export const ProfileName = styled(Link)`
  margin-top: 1rem;
  color: var(--gray-100);
  line-height: 1.6;
`;

export const ProfileUsername = styled.span`
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`;

export const EditProfileLink = styled(Link)`
  background: transparent;
  color: var(--orange-500);
  border: 1px solid var(--orange-500);
  border-radius: 8px;
  height: 3rem;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background: var(--orange-500);
    color: var(--white);
    transition: color 0.2s, background-color 0.2s;
  }
`;

export const CreatePost = styled.button`
  background: transparent;
  color: var(--orange-500);
  border: 1px solid var(--orange-500);
  border-radius: 8px;
  height: 3rem;
  margin-top: 1rem;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background: var(--orange-500);
    color: var(--white);
    transition: color 0.2s, background-color 0.2s;
  }
`;