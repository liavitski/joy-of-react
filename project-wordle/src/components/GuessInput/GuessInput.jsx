import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) =>
          setGuess(event.target.value.toUpperCase())
        }
        pattern="[A-Za-z]{5}"
        // placeholder="Enter 5 letter word"
        minLength={5}
        maxLength={5}
        title="Please enter exacly 5 letters"
        required
      />
    </form>
  );
}

export default GuessInput;
