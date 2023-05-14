import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guess}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  )
}

export default GuessInput;
