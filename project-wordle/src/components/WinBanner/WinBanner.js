import React from 'react';
import Banner from '../Banner/Banner';

function WinBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;
