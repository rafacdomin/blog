import React, { useCallback, useEffect, useState } from 'react';

import Post from '../../components/Post';
import api from '../../services/api';

import Header from '../../components/Header';
import { Container } from './styles';
import { useSearch } from '../../hooks/search';

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

  const shuffleArray = useCallback(array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }, []);

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(shuffleArray(response.data));
    });

    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, [shuffleArray]);

  return (
    <>
      <Header />

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
    </>
  );
};

export default Home;
