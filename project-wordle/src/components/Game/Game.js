import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('idle'); // idle, lose, win
  const numOfGuesses = results.length;

  // show answer
  console.info({ answer });

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

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setResults([]);
    setGameStatus('idle');
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard results={results} />
      {gameStatus === 'win' && (
        <HappyBanner
          numOfGuesses={numOfGuesses}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lose' && (
        <SadBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
