import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Comment, { CommentProps } from '../../components/Comment';
import api from '../../services/api';
import getReadTime from '../../utils/getReadTime';
import {
  PageContent,
  Container,
  ProfileContainer,
  Content,
  Main,
  Footer,
  CommentContainer,
} from './styles';

interface PostProps {
  userId: number;
  title: string;
  body: string;
  readTime: number;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  username: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    city: string;
  };
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<PostProps>({} as PostProps);
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [comments, setComments] = useState<CommentProps[]>([]);

  const { post_id } = useParams<{ post_id: string }>();

  useEffect(() => {
    api.get(`posts/${post_id}`).then(postResponse => {
      setPost({
        ...postResponse.data,
        readTime: getReadTime(postResponse.data.body),
      });

      api.get(`users/${postResponse.data.userId}`).then(userResponse => {
        setUser(userResponse.data);
      });
    });

    api.get(`posts/${post_id}/comments`).then(commentsResponse => {
      setComments(commentsResponse.data);
    });
  }, [post_id]);

  return (
    <PageContent>
      <Container>
        <ProfileContainer>
          <header>
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${user?.id}.svg?mood[]=happy`}
              alt="profile_picture"
            />
            <div>
              <Link to="/">{user.name}</Link>
              <span>@{user.username}</span>
              <span>{user.email}</span>
            </div>
          </header>
          <div>
            <strong>Company</strong>
            <span>{user.company?.name}</span>
          </div>
          <div>
            <strong>City</strong>
            <span>{user.address?.city}</span>
          </div>
          <button type="button">Ver Perfil</button>
        </ProfileContainer>

        <Content>
          <Main>
            <h1>{post.title}</h1>

            <header>
              <div>
                <img
                  src={`https://avatars.dicebear.com/api/avataaars/${user?.id}.svg?mood[]=happy`}
                  alt="profile_picture"
                />
                <Link to="/">{user.name}</Link>
              </div>

              <span>{post.readTime} min read</span>
            </header>

            <p>{post.body}</p>
          </Main>

          <Footer>
            Posted by:
            <div>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${user?.id}.svg?mood[]=happy`}
                alt="profile_picture"
              />
              <div>
                <Link to="/">{user.name}</Link>
                <span>@{user.username}</span>
                <span>{user.email}</span>

                <p>
                  Company: {user?.company?.name} <br />
                  {user?.company?.catchPhrase}
                </p>
              </div>
            </div>
          </Footer>

          <CommentContainer>
            <h2>Discussion</h2>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </CommentContainer>
        </Content>
      </Container>
    </PageContent>
  );
};

export default PostPage;
