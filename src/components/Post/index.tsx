import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { UserProps, PostProps } from '../../pages/Home';

interface CustomProps {
  user: UserProps | undefined;
  post: PostProps;
}

const Post: React.FC<CustomProps> = ({ user, post }) => {
  const [readTime, setReadTime] = useState(() => {
    const textLenght = post.body.split(' ').length;

    if (textLenght > 0) {
      const value = Math.ceil(textLenght / 220);

      return value;
    }

    return 1;
  });

  return (
    <Container onClick={() => console.log(post.title)}>
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

      <footer>
        <span>{readTime} min read</span>
      </footer>
    </Container>
  );
};

export default Post;
