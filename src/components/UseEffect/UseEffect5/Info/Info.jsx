import React from 'react';

const Info = () => {

  React.useEffect(() => {
    console.log('useEffect 로드');
    return() => {
        console.log('해당 컴포넌트 사라짐');
    }
  }, [])

  return(
    <>
      <p>인포메이션</p> 
    </>
  )
}

export default Info;