import React, { useState, useEffect } from 'react';
import { Post, PostType } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Sidebar }from '../../components/Sidebar/Sidebar';
import { Search } from '../../components/Search/Search';
import { FeedContainer } from './Feed.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';
import axios from 'axios';
import '../../styles/global.css';

export function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    // Buscar os posts pro feed no back
    async function fetchPosts() {
      try {
        const response = await axios.get(`http://localhost:8080/publications/friendsPublications/${localStorage.getItem('id')}`);
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('A resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = (newPost: PostType) => {
    handleCloseModal();
  };

  return (
    <div>
      <Header />

      <FeedContainer>
        <Sidebar onCreatePost={handleOpenModal} />
        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
        <aside>
          <Search />
        </aside>
      </FeedContainer>

      {isModalOpen && <CreatePost onClose={handleCloseModal} onCreatePost={handleCreatePost} />}
    </div>
  );
}
