import React from 'react';
import Banner from '../Banner/Banner';

function HappyBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy" actionText={'Restart game'} action={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
