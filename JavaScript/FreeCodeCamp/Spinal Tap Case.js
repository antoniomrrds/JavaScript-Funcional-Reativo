const  spinalCase = (str) => {
  const regex = /([a-z]+|[A-Z])[a-z]+/g
  const test = str.match(regex)
  return test.join('-').toLowerCase();
}
const result  = 
spinalCase("thisIsSpinalTap")
// spinalCase(' ThisIsSpinalTap ');
console.log(result)