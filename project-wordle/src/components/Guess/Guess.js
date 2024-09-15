import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({ result, answer }) {
  const guess = result ? result.guess : undefined;
  const checkedResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={
            checkedResult ? checkedResult[num].letter : undefined
          }
          status={
            checkedResult ? checkedResult[num].status : undefined
          }
        />
      ))}
    </p>
  );
}

export default Guess;
