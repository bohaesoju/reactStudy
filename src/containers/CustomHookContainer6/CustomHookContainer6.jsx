import React from 'react';
import useLocalStorage from '../../components/CustomHook/useLocalStorage';

const CustomHookContainer6 = () => {
  const [name, setName] = useLocalStorage('job', 'Developer');

  const handleKeyChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input 
        value={name} 
        onChange={ handleKeyChange } 
        type="text"
      />
    </>
  )
};

export default CustomHookContainer6;