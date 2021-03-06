import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Timer from './components/Pomodoro/Timer';
import Todo from './components/Todo/Todo';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Error404 from './components/Error/404';
import Post from './components/Post';
import Create from './components/Create';
import AppHooks from './components/Hooks/App';
import Users from './components/Users/Users';
import UserCreate from './components/Users/UserCreate';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pomodoro" component={Timer} exact />
      <Route path="/todo" component={Todo} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/posts/:id" component={Post} exact />
      <Route path="/posts" component={Create} exact />
      <Route path="/hooks" component={AppHooks} exact />
      <Route path="/users" component={Users} exact />
      <Route path="/users/create" component={UserCreate} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
