const  nothingSpace = (str,numsSpaces=1 ) => {
    const regex = RegExp(`\\s{${numsSpaces}}\\w+\\S|\\S`,'gi')
    const  result = str.match(regex) 
   return result.join('').trim()
}
const r =
// nothingSpace("                                        The_   Andy_Gri                                                                  f fith  _Show")
nothingSpace("  thisIsSpin  alTap    ",1)
console.log(r)