import * as React from "react";

export const UserContext = React.createContext({
  userAName: '기본값',
  setUserAName: () => ({}),
});

const UserContextProvider = props => {
  const [userAName, setUserAName] = React.useState('');

  return (
    <UserContext.Provider
      value={{
        userAName,
        setUserAName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
