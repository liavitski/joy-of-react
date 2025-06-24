import React from 'react';

function GuessInput({ handleSubmitGuess }) {
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
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          setTentativeGuess(newGuess);
        }}
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
        title="Please enter exacly 5 letters"
        required
        autoFocus
      />
    </form>
  );
}

export default GuessInput;
