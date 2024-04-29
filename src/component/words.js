var TURKISH_WORDS = [
  ['sociaal', 'Je kunt goed omgaan met andere.'],
  ['leergierig', 'Je wilt graag nieuwe dingen leren.'],
  ['zorgzaam', 'Je hebt aandacht voor andere en bereid zijn om te helpen als ze dat nodig hebben.'],
  ['geduldig', 'Je kunt rustig wachten zonder snel geirriteerd te raken.'],
  ['enthousiast', 'Je hebt vol energie, opwinding en interesse over iets.'],
  ['eerlijk', ')Je spreekt altijd waarheid zonder te liegen of te bedriegen.'],
  ['creatief', 'Orginele ideeen kunnen bedenken en problemen op een innovatieve manier kunnen oplossen.'],
  ['behulpzaam', 'Klaar staan om anderen te ondersteunen als ze hulp nodig hebben.'],
  ['einde', 'Einde']
  
]

function randomWord(index) {
  //return TURKISH_WORDS[Math.floor(Math.random() * TURKISH_WORDS.length)]
  if(TURKISH_WORDS.length-1>=index) {
   return TURKISH_WORDS[index]}
   else{return TURKISH_WORDS[index-1]}

   
}

export { randomWord }
