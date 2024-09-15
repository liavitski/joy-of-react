import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [results, setResults] = React.useState([]);

  function addResult(guess) {
    const guessObj = { guess, id: crypto.randomUUID() };
    const newResults = [...results, guessObj];
    setResults(newResults);

    if (guess.toUpperCase() === answer) {
      setGameStatus('win');
    } else if (newResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose');
    }
  }

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput addResult={addResult} gameStatus={gameStatus} />
      {gameStatus === 'win' && (
        <WinBanner numOfGuesses={results.length} />
      )}
      {gameStatus === 'lose' && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
