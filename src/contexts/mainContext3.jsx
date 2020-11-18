import * as React from "react";

export const MainContext3 = React.createContext({
  name: '',
  setName: () => ({}),
});

const MainContext3Provider = props => {
  const [name, setName] = React.useState('Uyjoong');

  return (
    <MainContext3.Provider
      value={{
        name: name,
        setName: setName,
      }}
    >
      {props.children}
    </MainContext3.Provider>
  );
};

export default MainContext3Provider;
