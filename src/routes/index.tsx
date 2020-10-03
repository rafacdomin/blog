import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PostPage from '../pages/PostPage';
import Profile from '../pages/Profile';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/posts/:post_id" component={PostPage} />
    <Route path="/users/:user_id/:user_name" component={Profile} />
  </Switch>
);

export default routes;
