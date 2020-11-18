import * as React from "react";

export const MainContext = React.createContext({
  name: '',
  setName: () => ({}),
});

const MainContextProvider = props => {
  const [name, setName] = React.useState('Uyjoong');

  return (
    <MainContext.Provider
      value={{
        name: name,
        setName: setName,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
