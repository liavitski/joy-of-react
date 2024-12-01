import React from 'react';

function Banner({ status, answer, numberOfGuesses }) {
  const classStatus = status === 'win' ? 'happy' : 'sad';

  return (
    <div className={`banner ${classStatus}`}>
      {status === 'win' && (
        <HappyBanner numberOfGuesses={numberOfGuesses} />
      )}
      {status === 'lose' && <SadBanner answer={answer} />}
    </div>
  );
}

function HappyBanner({ numberOfGuesses }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{numberOfGuesses} guesses</strong>.
    </p>
  );
}

function SadBanner({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

export default Banner;
