import React from 'react';
import Info from './Info';

const GreetingDeps = () => {
  const [name, setName] = React.useState('Uyjoong');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return(
    <>
      <p>필요한 렌더링만!</p> 
      <input onChange={ handleChange } type="text"/>
      <Info name={ name } />
    </>
  )
}

export default GreetingDeps;