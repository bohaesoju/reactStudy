import React from 'react';
import useLocalStorage from '../../components/CustomHook/useLocalStorage';
import { useInputChange } from '../../components/CustomHook/useInputChange';

const CustomHookContainer7 = () => {
  const [name, setName] = useInputChange('TEXT', '');

  return (
    <>
      <input 
        value={name} 
        onChange={ setName } 
        type="text"
      />
      <p>{ name }</p>
    </>
  )
};

export default CustomHookContainer7;