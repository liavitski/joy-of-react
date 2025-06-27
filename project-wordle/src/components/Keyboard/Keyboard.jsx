import React from 'react';

const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};
  const allLetters = validatedGuesses.flat();

  // { letter: 'W', status: 'incorrect' },
  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ results }) {
  const statusByLetter = getStatusByLetter(results);

  return (
    <div className="keyboard-wrapper">
      {keyboardRows.map((row, index) => (
        <div className="row" key={index}>
          {row.map((letter) => (
            <span
              className={`key ${statusByLetter[letter] || ''}`}
              key={letter}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
