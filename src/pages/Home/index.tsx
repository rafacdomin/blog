import React, { useEffect, useState } from 'react';

import Post from '../../components/Post';
import api from '../../services/api';

import { useSearch } from '../../hooks/search';
import shuffleArray from '../../utils/shuffleArray';
import { Container } from './styles';

export interface PostProps {
  id: string;
  title: string;
  userId: string;
  body: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  username: string;
}

const Home: React.FC = () => {
  const { search } = useSearch();
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(shuffleArray(response.data));
    });

    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Container>
      {posts
        .filter(post => post.title.includes(search))
        .map(post => (
          <Post
            key={post.id}
            user={users.find(user => user.id === post.userId)}
            post={post}
          />
        ))}
    </Container>
  );
};

export default Home;
