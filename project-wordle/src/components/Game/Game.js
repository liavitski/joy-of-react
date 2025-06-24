import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const newGuess = {
      guess: tentativeGuess,
      id: crypto.randomUUID(),
    };

    const newResults = [...results, newGuess];
    setResults(newResults);
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
