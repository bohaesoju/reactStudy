import React from 'react';
import Checks from '../../components/Checks';

const labels = ['check 1', 'check 2', 'check 3']

const CustomHookContainer = () => {
  const [checkList, setCheckList] = React.useState([false, false, false])

  const handleCheckClick = (index) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)))
  }

  const isAllChecked = checkList.every((x) => x);

  return (
    <>
      <Checks
        checkList={ checkList }
        labels={ labels }
        onChecks={ handleCheckClick }
      />
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </>

  )

  
};

export default CustomHookContainer;