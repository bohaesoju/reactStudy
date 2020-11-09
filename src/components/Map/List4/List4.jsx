import React from 'react';
import ListText from './ListText';

const List4 = () => {
  const jobs = ['Developer', 'Teacher', 'Marketer', 'Docter', 'Nurse']  
  return (
    <>
      <p>사람 Out</p>
      <ul>
        { jobs.map((job, index) => (
          <ListText key={ index } name={ job } />
        ))}
      </ul>
    </>
  );
};

export default List4;