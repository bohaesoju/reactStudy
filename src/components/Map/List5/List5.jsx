import React from 'react';
import ListText from './ListText';

const List5 = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [jobs, setJobs] = React.useState([
    { name: 'Developer' },
    { name: 'Teacher' },
    { name: 'Marketer' },
    { name: 'Docter' },
    { name: 'Nurse' },
  ])

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    // const newJobs = jobs.concat({ name: inputValue });
    const newJobs = [...jobs, { name: inputValue }]
    console.log('newJobs', newJobs)
    setJobs(newJobs);
    setInputValue('');
  };

  return (
    <>
      <p>사람 Out</p>
      <input value={ inputValue } onChange={ handleChange } type="text"/>
      <button onClick={ handleClick }>추가</button>
      <ul>
        { jobs.map((e, i) => (
          <ListText key={ i } name={ e.name } />
        ))}
      </ul>
    </>
  );
};

export default List5;