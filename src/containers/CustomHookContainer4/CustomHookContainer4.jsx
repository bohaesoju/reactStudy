import React from 'react';
import useMounted from '../../components/CustomHook/useMounted';

const CustomHookContainer4 = () => {
  const mounted = useMounted();
  return (
    <>
      {mounted === true ? 
        <p>컴포넌트가 마운팅 되었습니다.</p> :
        <p>로딩중입니다.</p> 
      }
    </>
  )
};

export default CustomHookContainer4;