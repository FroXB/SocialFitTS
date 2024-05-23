import React, { useState } from 'react';
import { ThumbsUp } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';
import * as Styles from './Post.styles.ts';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLikeCount((state) => state + 1);
  }

  return (
    <Styles.Post>
      <Styles.Header>
        <Styles.Author>
          <Avatar src={post.author.avatarUrl} />
          <Styles.AuthorInfo>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </Styles.AuthorInfo>
        </Styles.Author>
      </Styles.Header>

      <Styles.Content>
        {post.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </Styles.Content>

      <Styles.Footer>
        <button onClick={handleLike}>
          <ThumbsUp />
          Curtir
          <span>{likeCount}</span>
        </button>
      </Styles.Footer>
    </Styles.Post>
  );
}
