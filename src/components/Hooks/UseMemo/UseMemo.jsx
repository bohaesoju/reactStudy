import * as React from 'react';

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;  
  }
}

const INITIAL_STATE = { value: 0 }

const UseMemo = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  const handleIncreaseButton = () => {
    dispatch({ type: 'INCREMENT'})
  };

  const handleDecreaseButton = () => {
    dispatch({ type: 'DECREMENT'})
  };

  return(
    <>
      <p>현재 카운터의 값은 { state.value }</p>
      <button onClick={handleIncreaseButton}>더하기</button>
      <button onClick={handleDecreaseButton}>빼기</button>
    </>
  )
}

export default UseMemo;
