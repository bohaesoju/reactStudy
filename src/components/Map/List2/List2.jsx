import React from 'react';

const List2 = () => {
  const jobs = ['Developer', 'Teacher', 'Marketer', 'Docter', 'Nurse']  
  return (
    <ul>
      { jobs.map((job) => (
        <li>{ job }</li>
      ))}
    </ul>
  );
};

export default List2;