import React from 'react';

function InputForm({ handleSubmit, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        disabled={gameStatus !== 'idle'}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default InputForm;
