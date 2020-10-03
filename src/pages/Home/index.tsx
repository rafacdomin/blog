import React, { useEffect, useState } from 'react';

import { useSearch } from '../../hooks/search';
import Post from '../../components/Post';
import api from '../../services/api';
import shuffleArray from '../../utils/shuffleArray';

import PostProps from '../../@types/postProps';
import UserProps from '../../@types/userProps';

import { Container } from './styles';

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
