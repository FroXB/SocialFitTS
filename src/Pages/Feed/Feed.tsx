import React, { useState } from 'react';

import { Post, PostType } from '../../components/Post/Post'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Search } from '../../components/Search/Search';
import { FeedContainer } from './Feed.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';
import axios from 'axios';
import '../../styles/global.css';

console.log("eu chupo penis")
const response = await  axios.get('http://localhost:8080/publications/friendsPublications')

const posts: PostType[] = [ 
{
  id: 1,
  author: {
    avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless',
    name: 'Rafael Barbosa',
    role: '@Username'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
  ],
},
]

export function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />

      <FeedContainer>
        <Sidebar onCreatePost={handleOpenModal} />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
        <aside>
          <Search />
        </aside>
      </FeedContainer>

      {isModalOpen && <CreatePost onClose={handleCloseModal} />}
    </div>
  );
}