import React from 'react';

const ListText = (props) => {
  const { name, onDelete } = props;
  const handleButtonClick = () => {
    onDelete(name)
  };
  console.log(props)
  return (
      <li>{ name } <button onClick={ handleButtonClick }>삭제</button></li>
  );
};

export default ListText;