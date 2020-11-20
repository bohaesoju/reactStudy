import React from 'react';
import { renderChecks } from '../../components/CustomHook/useChecks';
import useChecks from '../../components/CustomHook/useChecks';

const labels = ['check 1', 'check 2', 'check 3']

const CustomHookContainer2 = () => {
  const [isAllChecked, renderChecks] = useChecks(labels)

  return (
    <>
      { renderChecks() }
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </>

  )

  
};

export default CustomHookContainer2;