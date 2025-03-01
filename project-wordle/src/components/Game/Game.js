import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [status, setStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const newGuess = { value: guess, id: crypto.randomUUID() };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (guess.toUpperCase() === answer) {
      setStatus('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setStatus('running');
  }

  const validatedGuesses = guesses.map(({ value }) =>
    checkGuess(value, answer)
  );

  return (
    <>
      <GuessResults guesses={validatedGuesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        status={status}
      />

      <Keyboard validatedGuesses={validatedGuesses} />

      {status === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
