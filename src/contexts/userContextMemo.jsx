/* eslint-disable no-sequences */
import * as React from "react";

export const userContextMemo = React.createContext({
  userAName: '기본값',
  setUserAName: () => ({})
});

const UserContextMemoProvider = props => {
  const [userAName, setUserAName] = React.useState('');
  const value = React.useMemo(() => ({ userAName: userAName, setUserAName: setUserAName }), [userAName]);

  return (
    <userContextMemo.Provider
      value={ value }
    >
      {props.children}
    </userContextMemo.Provider>
  );
};

export default UserContextMemoProvider;
