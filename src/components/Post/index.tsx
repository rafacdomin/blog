import React from 'react';
import { useHistory } from 'react-router-dom';

import PostProps from '../../@types/postProps';
import UserProps from '../../@types/userProps';

import getReadTime from '../../utils/getReadTime';
import { Container } from './styles';

interface CustomProps {
  user: UserProps | undefined;
  post: PostProps;
}

const Post: React.FC<CustomProps> = ({ user, post }) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/posts/${post.id}`)}>
      <header>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${user?.id}.svg?mood[]=happy`}
          alt="profile_picture"
        />
        <div>
          <strong>{user?.name}</strong>
          <span>{user?.email}</span>
        </div>
      </header>

      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <footer>
        <span>{getReadTime(post.body)} min read</span>
      </footer>
    </Container>
  );
};

export default Post;
