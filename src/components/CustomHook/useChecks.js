import React from 'react';
import Checks from '../../components/Checks';

const useChecks = (labels) => {
    const [checkList, setCheckList] = React.useState(() => labels.map(() => false))
   
    const handleCheckClick = (index) => {
      setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)))
    }
   
    const isAllChecked = checkList.every((x) => x)
   
    const renderChecks = () => (
      <Checks checkList={checkList} labels={labels} onCheck={handleCheckClick} />
    )
   
    return [isAllChecked, renderChecks]
} 

export default useChecks;