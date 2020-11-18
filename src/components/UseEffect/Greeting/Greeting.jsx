import React from 'react';
import Info from './Info';

const Greeting = () => {
  const [name, setName] = React.useState('Uyjoong');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return(
    <>
      <p>불필요한 렌더링</p> 
      <input onChange={ handleChange } type="text"/>
      <Info name={ name } />
    </>
  )
}

export default Greeting;