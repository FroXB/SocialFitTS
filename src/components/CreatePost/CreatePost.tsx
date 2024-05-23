import React, { useState, ChangeEvent } from 'react';
import { X } from 'phosphor-react';
import {
  CreatePostOverlay,
  CreatePostContainer,
  UserDetails,
  ProfileName,
  ProfileUsername,
  PostInput,
  SubmitButton
} from './CreatePost.styles.ts';

interface CreatePostProps {
  onClose: () => void;
}

const profileName = localStorage.getItem('name');
const tagUser = localStorage.getItem('user');

export const CreatePost: React.FC<CreatePostProps> = ({ onClose }) => {
  const [postText, setPostText] = useState('');

  function handlePostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setPostText(value);
  }

  async function handlePostSubmit() {
    if (postText.trim() === '') {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/publications/createPost/${localStorage.getItem('id')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ publicationText: postText })
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      setPostText('');
      onClose();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <CreatePostOverlay>
      <CreatePostContainer>
        <X style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          cursor: 'pointer'
        }}
          size={32}
          onClick={onClose}
        />
        <UserDetails>
          <ProfileName>{profileName}</ProfileName> {/* Nome do usuário logado */}
          <ProfileUsername>@{tagUser}</ProfileUsername> {/* Username do usuário logado */}
        </UserDetails>
        <PostInput
          value={postText}
          onChange={handlePostChange}
          placeholder="Digite seu texto aqui..."
        />
        <SubmitButton onClick={handlePostSubmit} disabled={postText.trim() === ''}>
          Enviar
        </SubmitButton>
      </CreatePostContainer>
    </CreatePostOverlay>
  );
};
