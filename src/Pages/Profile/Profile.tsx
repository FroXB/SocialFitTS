import React, { useState, useEffect } from 'react';
import { Post, PostType, originPost } from '../../components/Post/Post.tsx';
import { Header } from '../../components/Header/Header.tsx';
import { Sidebar }from '../../components/Sidebar/Sidebar.tsx';
import { Search } from '../../components/Search/Search.tsx';
import { ProfileContainer, Title } from './Profile.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';
import axios from 'axios';
import '../../styles/global.css';

export function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  function transformarPosts(posts: originPost[]): PostType[] {
    return posts.map((post, index) => ({
      id: index + 1,
      author: {
        avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless', // Valor fixo
        name: post.name,
        role: `@${post.userName}`
      },
      content: [
        { type: 'paragraph', content: post.publicationText } 
      ],
      like: post.likes
    }));
  }

  useEffect(() => {
    // Adiciona os posts do usuario no perfil dele
    async function fetchProfilePosts() {
      try {
        const response = await axios.get(`http://localhost:8080/publications/user/${localStorage.getItem('id')}`);
        console.log("testetetqetwqetq")
        console.log(response)
        if (Array.isArray(response.data)) {
          setPosts(transformarPosts(response.data));
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
        <Title>Profile</Title>
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
