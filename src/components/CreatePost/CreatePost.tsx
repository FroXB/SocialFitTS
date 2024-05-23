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
  onCreatePost: (newPost: PostType) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onClose, onCreatePost }) => {
  const [postText, setPostText] = useState('');

  function handlePostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setPostText(value);
  }

  function handlePostSubmit() {
    if (postText.trim() === '') {
      return;
    }

    const newPost = {
      id: Date.now(),
      author: {
        name: 'Nome do usuário', // inserir aqui nome de usuario logado
        role: '@Usuario', // inserir aqui nome de usuario logado
        avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=66509be7&is=664f4a67&hm=7e2297b18f5f9c0191196b9262d700c520605e2e39410d10b1e35cc1de3ab510&=&format=webp&quality=lossless',
      },
      content: [{ type: 'paragraph', content: postText }],
    };

    onCreatePost(newPost);
    setPostText('');
    onClose();
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
          <ProfileName>Rafael Barbosa</ProfileName> {/* Nome do usuario que esta logado */}
          <ProfileUsername>@Usuario</ProfileUsername> {/* username do usuario que esta logado */}
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
