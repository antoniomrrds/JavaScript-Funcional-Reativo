function spinalCase(str) {
for (let index = 0; index < str.length; index++) {
  const regex = /[A-Z]/g
  let test =regex.exe(str)
  console.log(test.length)
  
}

//  let resultWord =test.trim().split(' ').join('-').toLowerCase().replaceAll('_','-')
  // return resultWord;
  // return test;
}

let r = 
spinalCase("thisIsSpinalTap")
// spinalCase('  This Is Spinal Tap');
console.log(r)