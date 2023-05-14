import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [rowOfGuesses, setRowOfGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...rowOfGuesses, guess];
    setRowOfGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults rowOfGuesses={rowOfGuesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={rowOfGuesses.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
