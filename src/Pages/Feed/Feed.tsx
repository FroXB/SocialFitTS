import React, { useState, useEffect } from 'react';
import { Post, PostType, originPost  } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Sidebar }from '../../components/Sidebar/Sidebar';
import { Search } from '../../components/Search/Search';
import { FeedContainer, Title } from './Feed.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';
import axios from 'axios';
import '../../styles/global.css';

export function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  function transformarPosts(posts: originPost[]): PostType[] {
    return posts.map((post, index) => ({
      id: index + 1, // Incrementa 1 para organizar no front
      author: {
        avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless', // Valor fixo
        name: post.name, // Atributo name
        role: `@${post.userName}` // Atributo userName
      },
      content: [
        { type: 'paragraph', content: post.publicationText } // Atributo publicationText
      ],
      like: post.likes // Atributo likes
    }));
  }

  useEffect(() => {
    // Buscar os posts pro feed no back
    async function fetchPosts() {
      try {
        const response = await axios.get(`http://localhost:8080/publications/friendsPublications/${localStorage.getItem('id')}`);
        console.log(response);
        console.log("teste")
        console.log(transformarPosts(response.data))
        if (Array.isArray(response.data)) {
          setPosts(transformarPosts(response.data));
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
        <Title>Tela inicial</Title>
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
