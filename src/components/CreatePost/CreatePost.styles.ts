import styled from 'styled-components';

export const CreatePostOverlay = styled.div`
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

export const CreatePostContainer = styled.div`
  background: var(--gray-800);
  padding: 2rem;
  border-radius: 8px;
  width: 30rem;
  position: relative;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
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

export const PostInput = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  background: var(--gray-700);
  color: var(--gray-100);
  border: 1px solid var(--gray-600);
  border-radius: 8px;
  margin-bottom: 1rem;

  resize: none;
`;

export const SubmitButton = styled.button`
  background: var(--orange-500);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: var(--orange-600);
  }
`;
