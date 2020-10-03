import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PostPage from '../pages/PostPage';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/posts/:post_id" component={PostPage} />
  </Switch>
);

export default routes;
