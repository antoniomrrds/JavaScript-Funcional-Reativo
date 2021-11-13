// function sumFibs2(num) {
//   const fb = [1, 1]
//   for (var i = 2; i < num; i++) {
//     fb.push(fb[i - 2] + fb[i - 1])
//   }
//   return fb
// }

// console.log(sumFibs2(1));


function sumFibs(num) {
  let sum = 0
  const fb = [1, 1]
  const sequenceFibonacci = Array(num).fill().map((n, i) => {
    if (i >= 2) {
      fb.push(fb[i - 2] + fb[i - 1])
    }
  })
  return fb
}
console.log(sumFibs(15));