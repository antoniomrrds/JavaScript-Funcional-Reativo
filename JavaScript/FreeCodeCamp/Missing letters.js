function fearNotLetter(str) {
  const alphabet ='abcdefghijklmnopqrstuvwxyz'
      const firstLetter =  str[0]
      const lastLetter =  str[str.length-1]
      const regex = new RegExp(`${firstLetter}\\w+${lastLetter}`,'gi') 
      const intervalAlphabet = alphabet.match(regex).toString().split('')
      const copyStrArr = Array.from(str)
      const letters =  intervalAlphabet.filter(letter=> copyStrArr.indexOf(letter) === -1 )
      return (letters.toString()|| undefined);
  }
  
  const r =fearNotLetter("abce");
  console.log(r)