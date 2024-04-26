var TURKISH_WORDS = [
  ['dostcanlisi', 'Arkadaslarina yakin davranir, esprili, guler yuzlu'],
  ['yaratici', 'Yeni seyler yapmayi sever'],
  ['durust', 'yalan soylemez'],
  ['sosyal', 'konusmayi sever'],
  ['son', 'son']
  
]

function randomWord(index) {
  //return TURKISH_WORDS[Math.floor(Math.random() * TURKISH_WORDS.length)]
  if(TURKISH_WORDS.length-1>=index) {
   return TURKISH_WORDS[index]}
   else{return TURKISH_WORDS[index-1]}

   
}

export { randomWord }
