import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaGlobe, FaExternalLinkAlt, FaPhone } from 'react-icons/fa';

import api from '../../services/api';

import PostProps from '../../@types/postProps';
import UserProps from '../../@types/userProps';

import Post from '../../components/Post';
import { Container, ProfileContent } from './styles';

const Profile: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [user, setUser] = useState<UserProps>();
  const { user_id } = useParams<{ user_id: string }>();

  useEffect(() => {
    api.get('/posts').then(({ data }) => {
      setPosts(data);
    });

    api.get(`/users/${user_id}`).then(({ data }) => setUser(data));
  }, [user_id]);

  return (
    <Container>
      <ProfileContent>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${user_id}.svg?mood[]=happy`}
          alt="profile_picture"
        />

        <strong>{user?.name}</strong>
        <span>@{user?.username}</span>
        <span>{user?.email}</span>

        <div>
          <span>
            <FaGlobe color="#e5625e" size={16} />
            {user?.address.city}
          </span>
          <span>
            <FaExternalLinkAlt color="#e5625e" size={16} />
            {user?.website}
          </span>
          <span>
            <FaPhone color="#e5625e" size={16} />
            {user?.phone}
          </span>
        </div>

        <footer>
          <strong>Company:</strong>
          <span>
            <strong>{user?.company.name}</strong> - {user?.company.catchPhrase}
          </span>
        </footer>
      </ProfileContent>
      {posts
        .filter(post => String(post.userId) === user_id)
        .map(post => (
          <Post key={post.id} user={user} post={post} />
        ))}
    </Container>
  );
};

export default Profile;
