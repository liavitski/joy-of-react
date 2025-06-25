import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('idle'); // idle, lose, win
  console.log(gameStatus);
  const numOfGuesses = results.length;

  function handleSubmitGuess(tentativeGuess) {
    const checkedGuess = checkGuess(tentativeGuess, answer);
    const newResults = [...results, checkedGuess];
    setResults(newResults);

    if (tentativeGuess === answer) {
      setGameStatus('win');
    } else if (tentativeGuess !== answer && newResults.length >= 6) {
      setGameStatus('lose');
    }
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'win' && <HappyBanner numOfGuesses={numOfGuesses} />}
      {gameStatus === 'lose' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
