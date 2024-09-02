import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Results({ results }) {
  console.log(results);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess className="guess" key={num} value={results[num]} />
      ))}
    </div>
  );
}

export default Results;
