import React, {createContext, useEffect} from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [authuser, setAuthuser] = React.useState(null);
  const [dbUser, setDbUser] = React.useState(null);
  return (
    <AuthContext.Provider
      value={{
        authuser,
        setAuthuser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
