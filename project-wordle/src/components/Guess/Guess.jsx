import React from 'react';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ value }) {
  /*
  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
*/
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            letter={value ? value[num].letter : undefined}
            status={value ? value[num].status : undefined}
            key={num}
          />
        );
      })}
    </p>
  );
}

export default Guess;
