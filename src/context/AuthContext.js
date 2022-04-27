import React, {createContext, useEffect, useContext, useState} from 'react';
import {Auth} from 'aws-amplify';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [authuser, setAuthuser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(setAuthuser);
  }, []);

  const sub = authuser?.attributes?.sub;

  return (
    <AuthContext.Provider
      value={{
        authuser,
        dbUser,
        sub,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
