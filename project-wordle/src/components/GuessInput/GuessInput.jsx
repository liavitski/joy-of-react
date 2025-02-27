import React from 'react';

import { checkGuess } from '../../game-helpers';

function GuessInput({ handleSubmitGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== 'running'}
        required
        minLength={5}
        maxLength={5}
        pattern="^[A-Za-z]{5}$"
        title="Enter 5 letter word"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
