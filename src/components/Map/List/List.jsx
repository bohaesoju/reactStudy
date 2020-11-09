import React from 'react';

const List = () => {
  const jobs = ['Developer', 'Teacher', 'Marketer', 'Docter', 'Nurse']  
  return (
    <ul>
      <li>{jobs[0]}</li>
      <li>{jobs[1]}</li>
      <li>{jobs[2]}</li>
      <li>{jobs[3]}</li>
      <li>{jobs[4]}</li>
    </ul>
  );
};

export default List;