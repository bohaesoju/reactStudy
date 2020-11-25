import React from 'react';
import { useInputChange } from '../../components/CustomHook/useInputChange';

const CustomHookContainer8 = () => {
  const [phone, setPhone] = useInputChange('PHONE', '');

  return (
    <>
      <input 
        value={phone} 
        onChange={ setPhone } 
        type="text"
      />
      <p>{ phone }</p>
    </>
  )
};

export default CustomHookContainer8;