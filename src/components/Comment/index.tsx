import React from 'react';

import CommentProps from '../../@types/commentProps';

import { Container } from './styles';

interface CustomProps {
  comment: CommentProps;
}

const Comment: React.FC<CustomProps> = ({ comment }) => {
  return (
    <Container>
      <header>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${comment.id}.svg?mood[]=happy`}
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
