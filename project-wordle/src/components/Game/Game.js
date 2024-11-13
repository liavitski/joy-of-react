import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function call(number, action) {
  for (let i = 0; i < number; i++) {
    action(number)
  }
}

call(10, console.log)


function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([]);

  function addToResults(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessInput
        addToResults={addToResults}
        gameStatus={gameStatus}
      />
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
