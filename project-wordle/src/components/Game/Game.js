import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
<<<<<<< HEAD
=======
import InputForm from '../InputForm/InputForm';
import Results from '../Results/Results';
>>>>>>> b31c349d42cd915b6eb588c6a79c72f31d435048

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
<<<<<<< HEAD
  return <>Put a game here!</>;
=======
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
>>>>>>> b31c349d42cd915b6eb588c6a79c72f31d435048
}

export default Game;
