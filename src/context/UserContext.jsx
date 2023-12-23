import {storage} from '@/shared/helpers';
import React, {createContext, useEffect} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = React.useState(undefined);

  const getLocalUser = async () => {
    const userLocal = await storage.get('user');
    setUser(userLocal);
    return userLocal;
  };

  const setLocalUser = async newUser => {
    setUser(newUser);
    await storage.create('user', newUser);
  };

  // useEffect(() => {
  //   getLocalUser();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getLocalUser: () => getLocalUser(),
        setLocalUser: user => setLocalUser(user),
      }}>
      {children}
    </UserContext.Provider>
  );
};
