import React, { useState, useEffect, useContext, createContext } from 'react';
import { AuthContext } from './Auth';
import { getUser } from '../utils/UserApi';

const defaultUser = {
  username: 'zhopkin',
  email: 'zalupkin@mail.ru'
}; 

const fakeAsync = (callback) => {
  setTimeout(callback, 1000);
};

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const auth = useContext(AuthContext);
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    // fakeAsync(() => {
    //   setUserState(defaultUser);
    // });

    getUser().then(user => {
      setUserState(user);
    });
  }, [auth.authStatus]);

  const changeUser = () => {
    getUser().then(user => {
      setUserState(user);
    });
  };

  const value = {
    user: userState,
    changeUser
  }

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;