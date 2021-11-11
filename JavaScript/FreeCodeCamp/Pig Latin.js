function translatePigLatin(str) {
    // vowel 
    //
     const strVowel = str
     const regexText = /^[aeiou]/gi
     const resultRegexTest = regexText.test(strVowel)
     const resultVowel = strVowel+'way'
     //consonant
     const regex = /^([bcdfghjklmnpqrstvwyz]+)|\w+/gi
     const strRegex = str.match(regex) 
     const  resultConsonant = strRegex[1]+strRegex[0]+'ay';
    
     // no vowel
     const strNoVowelResult = str
     const noVowelRegex = /[aeiou]/gi
     const noVowelResult = noVowelRegex.test(strNoVowelResult)
     const noVowelResultText = strNoVowelResult +'ay'
    
   if(noVowelResult === false){
       return noVowelResultText
   }else if(!resultRegexTest){
      return resultConsonant
   } else{
    return  resultVowel
   }
   
   }
   
   const result = 
   // translatePigLatin("glove") 
   // translatePigLatin("consonant");
   // translatePigLatin("algorithm")
   translatePigLatin("rhythm")
   
   console.log(result)