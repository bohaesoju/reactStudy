import React from 'react';
import useMounted from '../../components/CustomHook/useMounted';

const CustomHookContainer3 = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
    // setMounted(true);
  }, []);
  
  return (
    <>
      {mounted === true ? 
        <p>컴포넌트가 마운팅 되었습니다.</p> :
        <p>로딩중입니다.</p> 
      }
    </>
  )
};

export default CustomHookContainer3;