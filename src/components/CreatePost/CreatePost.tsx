import React from 'react';
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

export const CreatePost: React.FC<CreatePostProps> = ({ onClose }) => {
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
          <ProfileName>Rafael Barbosa</ProfileName>
          <ProfileUsername>@Usuario</ProfileUsername>
        </UserDetails>
        <PostInput placeholder="Digite seu texto aqui..." />
        <SubmitButton>Enviar</SubmitButton>  {/* COLOCAR AQUI PRA ONDE O POST VAI SER ENVIADO */}
      </CreatePostContainer>
    </CreatePostOverlay>
  );
};