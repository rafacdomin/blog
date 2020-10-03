import React from 'react';

import { Container } from './styles';

export interface CommentProps {
  id: string;
  name: string;
  email: string;
  body: string;
}

interface CustomProps {
  comment: CommentProps;
}

const Comment: React.FC<CustomProps> = ({ comment }) => {
  return (
    <Container>
      <header>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${comment.email}.svg?mood[]=happy`}
          alt="profile_picture"
        />

        <div>
          <span>{comment.email}</span>
        </div>
      </header>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
    </Container>
  );
};

export default Comment;
