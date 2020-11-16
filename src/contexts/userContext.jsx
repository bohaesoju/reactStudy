import * as React from "react";

export const UserContext = React.createContext({
  userAName: '기본값',
  setUserAName: () => ({}),
  userBName: '기본값',
  setUserBName: () => ({}),
});

const UserContextProvider = props => {
  const [userAName, setUserAName] = React.useState('');
  const [userBName, setUserBName] = React.useState('');
  return (
    <UserContext.Provider
      value={{
        userAName: userAName,
        setUserAName: setUserAName,
        userBName: userBName,
        setUserBName: setUserBName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
