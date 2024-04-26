import React, { useState, useEffect } from 'react';
import Word from './Word';
import Alphabet from './Alphabet';
import './Game.css';
import { randomWord } from './words'
var toplam=0;
var genelToplam=[];
const Game = () => {
  const [selectedWord, setSelectedWord] = useState(randomWord(0)); // Seçilen kelime
  const [teller, setTeller] = useState(0);
  const [cijfer, setCijfer] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]); // Tahmin edilen harfler
  const [wrongGuessCount, setWrongGuessCount] = useState(0); // Yanlış tahmin sayısı
  const [gameOver, setGameOver] = useState(false); // Oyunun bitip bitmediğini belirleyen durum

  // Harf seçme işlevi
  const selectLetter = (letter) => {
    // Seçilen harfi tahmin edilmiş harfler listesine ekler
    setGuessedLetters([...guessedLetters, letter]);
    // Yanlış tahminse yanlış tahmin sayısını artırır
    if (!selectedWord[0,0].includes(letter)) {
      if(selectedWord[0,0]!=="son" && wrongGuessCount<6){setWrongGuessCount(wrongGuessCount + 1);}else{}
      console.log(wrongGuessCount);
    }
  };

  // Oyunun sonucunu belirleme
  const gameResult = ()  => {
    toplam=0;
    if (wrongGuessCount >= 6) {
      if (selectedWord[0,0]!=="son"){
      genelToplam[teller]=0;
      return 'Kaybettin! Doğru kelime: ' + selectedWord[0,0];
      }else{ return "OYUN BITTI!!!";} 
    } else if (selectedWord[0,0].split('').every((letter) => guessedLetters.includes(letter))) {
      if (selectedWord[0,0]!=="son"){
      toplam=(cijfer + 7-wrongGuessCount)*10;
      genelToplam[teller]=toplam;
      console.log(genelToplam);
      return 'Kazandın!'  +  toplam;
    }else{ return "OYUN BITTI!!!";}
    } else if (selectedWord[0,0]==="son"){
       return "OYUN BITTI!!!"; setWrongGuessCount(0);
    }
    else {
      return '' ;
    }
  };


  // Yeniden başlatma işlevi
  const restartGame=  () => {
    setGuessedLetters([]);
    setTeller(selectedWord[0,0]==="son"?teller:teller+1)

  };

  const previus =() => {
    setGuessedLetters([]);
    teller>0 ? setTeller(teller-1):setTeller(teller);
  
  
  }

  // Klavye olaylarını dinleme

  
  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyPressed = event.key.toLowerCase();
      // Sadece harf tuşlarına basıldığında işlem yap
      if (/^[a-z]$/.test(keyPressed) && !guessedLetters.includes(keyPressed) && !gameOver) {
        selectLetter(keyPressed);
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [guessedLetters, gameOver]);



useEffect(() => {
  console.log(teller);  
  setGuessedLetters([]);
  setSelectedWord(randomWord(teller));
  setWrongGuessCount(0);
  setGameOver(false);
}, [teller]);


  return (
    <div className="game">
      <h1>{selectedWord[0,1]}</h1>
      <img src={`./img/${wrongGuessCount}.jpg`} />
      <Word selectedWord={selectedWord[0,0]} guessedLetters={guessedLetters} wrongGuessCount={wrongGuessCount} />
      <Alphabet guessedLetters={guessedLetters} selectLetter={selectLetter} />
      <div className="result">{gameResult()}</div>
      <button onClick={previus}>previus</button>
      <button onClick={restartGame}>Next</button>
      <div>GenelPuan : {
        genelToplam.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</div>
     </div>
   
  );
};

export default Game;
