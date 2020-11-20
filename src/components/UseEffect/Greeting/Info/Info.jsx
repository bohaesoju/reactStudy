import React from 'react';

const Info = (props) => {
  const { name } = props;
  
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  React.useEffect(() => {
    console.log('useEffect ! ')
    document.title = 'Hello, ' + name;
  })

  return(
    <>
      <p>{ name }</p> 
      <button onClick={ handleClick }>버튼</button>
      <p>카운트 : { count }</p>
    </>
  )
}

export default Info;