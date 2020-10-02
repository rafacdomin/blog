import React, { useEffect, useState } from 'react';

import Post from '../../components/Post';
import api from '../../services/api';

import { Container } from './styles';

interface PostProps {
  id: string;
  title: string;
  userId: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('/posts').then((response) => {
      setPosts(response.data);
    });

    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  });

  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          user={users.find((user) => user.id === post.userId)}
          title={post.title}
        />
      ))}
    </Container>
  );
};

export default Home;
