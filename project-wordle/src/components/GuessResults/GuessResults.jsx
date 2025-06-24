import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ guess, id }) => (
        <p className="guess" key={id}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
