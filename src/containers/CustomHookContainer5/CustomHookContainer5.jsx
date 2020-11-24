import React from 'react';
import useMounted from '../../components/CustomHook/useMounted';

const CustomHookContainer5 = () => {
  const [key, setKey] = React.useState('name');
  const [value, setValue] = React.useState(() => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  });

  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : key;
    } catch (error) {
      console.log(error);
      return key;
    }
  });

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };


  // React.useEffect(() => {
  //   window.localStorage.setItem(key, value);
  // }, [value])

  return (
    <>
      <input value={value} onChange={ handleValueChange } type="text"/>
    </>
  )
};

export default CustomHookContainer5;