import React, { useState, useEffect } from 'react';
import { Post, PostType } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Sidebar }from '../../components/Sidebar/Sidebar';
import { Search } from '../../components/Search/Search';
import { ProfileContainer } from './Profile.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';
import axios from 'axios';
import '../../styles/global.css';

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    // Adiciona os posts do usuario no perfil dele
    async function fetchProfilePosts() {
      try {
        const response = await axios.get('/api/profile-posts');
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('A resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    }

    fetchProfilePosts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = (newPost: PostType) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
    handleCloseModal();
  };

  return (
    <div>
      <Header />

      <ProfileContainer>
        <Sidebar onCreatePost={handleOpenModal} />
        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
        <aside>
          <Search />
        </aside>
      </ProfileContainer>

      {isModalOpen && <CreatePost onClose={handleCloseModal} onCreatePost={handleCreatePost} />}
    </div>
  );
}
