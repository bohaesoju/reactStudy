import React from 'react';

const SelectFruit = (props) => {
  const { selected, onChange } = props;
  console.log('SelectFruit Component Loaded');
  
  const handleSelectChange = (e) => {
    selected(e.target.value);
  };

  return (
    <div>
      <select onChange={ handleSelectChange }>
        <option value="banana">banana</option>
        <option value="apple">apple</option>
      </select>
    </div>
  );
};

// export default Title;
export default SelectFruit;