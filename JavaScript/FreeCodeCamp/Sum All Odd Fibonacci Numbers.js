function sumFibs(num) {
  let sum = 0
  const fb = [1, 1]
  const sequenceFibonacci = Array(num).fill().map((n, i) => {
    if (i >= 2) {
      fb.push(fb[i - 2] + fb[i - 1])
    }
  })

  const result = fb.filter((currentValue) => {
    if (currentValue % 2 == 1 && currentValue <= num) sum += currentValue
  });
return sum

}

console.log(sumFibs(75025));
