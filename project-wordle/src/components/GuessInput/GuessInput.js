import React from 'react';

function GuessInput({ addResult, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleGuess(event) {
    event.preventDefault();
    addResult(guess);
    setGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        disabled={gameStatus !== 'running'}
        pattern="[A-Za-z]{5}"
        maxLength={5}
        minLength={5}
        id="guess-input"
        type="text"
        value={guess}
        title="Input must contain exactly 5 letters"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
