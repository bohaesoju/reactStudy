import React from 'react';

const Numbers = (props) => {
  const { lottoNumber } = props;
  console.log('Numbers Component Loaded');
  
  // const handleInput = (e) => {
  //   onChange(e.target.value);
  // };

  return (
    <ul>
      {lottoNumber.map((e, i) => {
        return <li key={i}>{ e }</li>
      })}
    </ul>
  );
};

// export default React.memo(Numbers);
export default Numbers;