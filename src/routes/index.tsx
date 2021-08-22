import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import EditBook from '../pages/EditBook';
import NewBook from '../pages/NewBook';
import ViewBook from '../pages/ViewBook';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-book" component={NewBook} isPrivate />
    <Route path="/edit-book/:id" component={EditBook} isPrivate />
    <Route path="/view-book/:id" component={ViewBook} isPrivate />
  </Switch>
);

export default Routes;
