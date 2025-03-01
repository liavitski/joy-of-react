import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { checkGuess } from '../../game-helpers';
import InputForm from '../InputForm';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function testFn() {
  return null;
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('idle');

  const numberOfGuesses = guesses.length;

  function handleSubmit(guess) {
    if (guess === answer) {
      setGameStatus('win');
    }

    if (numberOfGuesses >= 5 && guess !== answer) {
      setGameStatus('lose');
    }

    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <InputForm
        handleSubmit={handleSubmit}
        gameStatus={gameStatus}
      />
      {gameStatus !== 'idle' && (
        <Banner
          status={gameStatus}
          answer={answer}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </>
  );
}

export default Game;
