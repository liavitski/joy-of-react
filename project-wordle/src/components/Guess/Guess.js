import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((el) => (
        <span className="cell" key={el}>
          {value ? value[el] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
