import React from 'react';

const Word = ({ selectedWord, guessedLetters }) => {
  const displayWord = selectedWord.split('').map((letter,index) => (
    <span key={index} className="letter">
      {guessedLetters.includes(letter) ? letter : '_ '}
    </span>
  ));
  return <div className="word">{displayWord}</div>;
};

export default Word;
