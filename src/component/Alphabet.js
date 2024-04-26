import React from 'react';

const Alphabet = ({ guessedLetters, selectLetter }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="alphabet">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => selectLetter(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
