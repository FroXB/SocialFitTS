import React from 'react';
import { PencilLine, NotePencil } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import {
  SidebarContainer,
  Cover,
  Profile,
  ProfileName,
  ProfileUsername,
  Footer,
  EditProfileLink,
  CreatePost
} from './Sidebar.styles.ts';

interface SidebarProps {
  onCreatePost: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCreatePost }) => {
  return (
    <SidebarContainer>
      <Cover src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <Profile>
        <Avatar src="https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless" />
        <ProfileName>Rafael Barbosa</ProfileName>
        <ProfileUsername>@Usuario</ProfileUsername>
      </Profile>

      <Footer>
        <EditProfileLink to="/profile">
          <PencilLine size={20} />
          Editar seu Perfil
        </EditProfileLink>
        <CreatePost onClick={onCreatePost}>
          <NotePencil size={20} />
          Crie seu Post
        </CreatePost>
      </Footer>
    </SidebarContainer>
  );
};
