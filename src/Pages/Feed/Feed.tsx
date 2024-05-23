import React, { useState } from 'react';

import { Post, PostType } from '../../components/Post/Post'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Search } from '../../components/Search/Search';
import { FeedContainer } from './Feed.styles.ts';
import { CreatePost } from '../../components/CreatePost/CreatePost.tsx';

import '../../styles/global.css';

const posts: PostType[] = []

export function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = (newPost: PostType) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
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

      {isModalOpen && <CreatePost onClose={handleCloseModal} onCreatePost={handleCreatePost} />}
    </div>
  );
}