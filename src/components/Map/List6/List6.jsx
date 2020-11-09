import React from 'react';
import ListText from './ListText';

const List6 = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [jobs, setJobs] = React.useState([
    { name: 'Developer' },
    { name: 'Teacher' },
    { name: 'Marketer' },
    { name: 'Docter' },
    { name: 'Nurse' },
  ])

  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = () => {
    const newJobs = [...jobs, { name: inputValue }]
    setJobs(newJobs);
    setInputValue('');
  };

  const handleDelete = (name) => {
    const nextJobs = jobs.filter(e => e.name !== name);
    setJobs(nextJobs);
  };

  return (
    <>
      <p>사람 Out</p>
      <input value={ inputValue } onChange={ handleChange } type="text"/>
      <button onClick={ handleClick }>추가</button>
      <ul>
        { jobs.map((e, i) => (
          <li key={ i }>
            { e.name } 
            <button onClick={() => handleDelete(e.name)}> 삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List6;