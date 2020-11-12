import * as React from 'react';

const Input = () => {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const handleChange = (e) => {
    console.log('e', e);
    setValue(e.target.value);
  };

  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  return(
    <>
      <input 
        onChange={ handleChange }
        type="text"
        value={ value }
      />

      <input 
        onChange={ handleChange2 }
        type="text"
        value={ value2 }
      />
    </>
  )
}

export default Input
