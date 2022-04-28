import React, {createContext, useEffect, useContext, useState} from 'react';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../models';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [authuser, setAuthuser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authuser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(setAuthuser);
  }, []);

  useEffect(() => {
    if (sub) {
      DataStore.query(User, u => u.sub('eq', sub)).then(user => {
        setDbUser(user[0]);
      });
    }
  }, [sub]);

  return (
    <AuthContext.Provider
      value={{
        authuser,
        dbUser,
        setDbUser,
        sub,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
