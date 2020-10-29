import * as React from 'react';

const Fruit = () => {
  const [fruit, setFruit] = React.useState('바나나');

  const handleInputChange = (e) => {
    console.log('react rerendering!')  
    setFruit(e.target.value);
  };
  
  return(
    <>
      <div>{ fruit }</div>
      <input type="text" value={ fruit } onChange={ handleInputChange }/>
    </>
  )
}

export default Fruit;
