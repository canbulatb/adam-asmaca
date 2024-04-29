import React from 'react';

const Word = ({ selectedWord, guessedLetters,wrongGuessCount }) => {
  const displayWord = selectedWord.split('').map((letter,index) => (
    <span key={index} className="letter">
      {guessedLetters.includes(letter) && wrongGuessCount<=6? letter : '_ '}
    </span>
  ));
  return <div className="word">{displayWord}</div>;
};

export default Word;
