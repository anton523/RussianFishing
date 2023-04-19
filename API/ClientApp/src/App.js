import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { AuthProvider } from './contexts/Auth';
import UserProvider from './contexts/User';

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  render() {
    return (
      <AuthProvider>
        <UserProvider>
          <Routes>
            {
              AppRoutes.map((route, index) => {
                const { element, needForumActivity, needAside, ...rest } = route;
                return <Route key={index} {...rest} element={<Layout needForumActivity={needForumActivity} needAside={needAside}>{element}</Layout>} />;
              })
            }
          </Routes>
        </UserProvider>
      </AuthProvider>
    );
  }
}
