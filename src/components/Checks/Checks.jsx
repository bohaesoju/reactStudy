import React from 'react';

const Checks = (props) => {
  const { checkList, labels, onChecks } = props;
  return (
    <ul>
      {labels.map((label, idx) => (
        <li key={idx}>
          <label>
            <input
              type='checkbox'
              checked={checkList[idx]}
              onClick={() => onChecks(idx)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Checks;