import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [rowOfGuesses, setRowOfGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setRowOfGuesses([...rowOfGuesses, guess]);
  }

  return (
    <>
      <GuessResults rowOfGuesses={rowOfGuesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
