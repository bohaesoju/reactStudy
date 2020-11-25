import React from 'react';
import useLocalStorage from '../../components/CustomHook/useLocalStorage';
import { useInputChange } from '../../components/CustomHook/useInputChange';

const CustomHookContainer9 = () => {
  const [won, setWon] = useInputChange('KR_WON', '');

  return (
    <>
      <input 
        value={won} 
        onChange={ setWon } 
        type="text"
      />
      <p>{ won }</p>
    </>
  )
};

export default CustomHookContainer9;