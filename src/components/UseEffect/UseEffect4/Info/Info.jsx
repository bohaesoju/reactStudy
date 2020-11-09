import React from 'react';

const Info = () => {

  React.useEffect(() => {
    console.log('useEffect 로드');
    return() => {
        console.log('Clean up');
    }
  }, [])

  return(
    <>
      <p>인포메이션</p> 
    </>
  )
}

export default Info;