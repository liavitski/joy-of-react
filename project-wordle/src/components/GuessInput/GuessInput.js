import React from 'react';
import React from 'react';

function GuessInput({ addToResults, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleGuess(event) {
    event.preventDefault();
    addToResults(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        type="text"
        value={tentativeGuess}
        required
        disabled={gameStatus !== 'running'}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
