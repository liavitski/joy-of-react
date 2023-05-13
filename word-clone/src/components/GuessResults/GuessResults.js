import React from 'react';

function GuessResults({ rowOfGuesses }) {
  return (
    <div className="guess-results">
      {rowOfGuesses.map((option, index) => (
        <p className="guess" key={index}>
          {option}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
