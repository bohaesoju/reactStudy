import React from 'react';

const List3 = () => {
  const jobs = ['Developer', 'Teacher', 'Marketer', 'Docter', 'Nurse']  
  return (
    <ul>
      { jobs.map((job, index) => (
        <li key={ index }>{ job }</li>
      ))}
    </ul>
  );
};

export default List3;