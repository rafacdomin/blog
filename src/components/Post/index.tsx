import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import getReadTime from '../../utils/getReadTime';
import { UserProps, PostProps } from '../../pages/Home';
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
          src={`https://avatars.dicebear.com/api/avataaars/${user?.email}.svg?mood[]=happy`}
          alt="profile_picture"
        />
        <div>
          <Link to="/">{user?.name}</Link>
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
