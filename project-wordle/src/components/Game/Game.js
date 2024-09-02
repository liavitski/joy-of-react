import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputForm from '../InputForm/InputForm';
import Results from '../Results/Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleResults(guess) {
    setResults([...results, guess]);
  }

  return (
    <>
      <Results results={results} />
      <InputForm handleResults={handleResults} />
    </>
  );
}

export default Game;
