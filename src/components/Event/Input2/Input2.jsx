import * as React from 'react';

const Input2 = () => {
  const [value, setValue] = React.useState({
    value1: '',
    value2: '',
    value3: ''
  });

  const handleChange = (name) => (e) => {
    setValue({
      ...value,
      [name]: e.target.value
    })
  };

  return(
    <>
      <input 
        onChange={ handleChange('value1') }
        type="text"
        value={ value.value1 }
      />

      <input 
        name="value2"
        onChange={ handleChange('value2') }
        type="text"
        value={ value.value2 }
      />

      <input 
        name="value2"
        onChange={ handleChange('value3') }
        type="text"
        value={ value.value3 }
      />
    </>
  )
}

export default Input2
