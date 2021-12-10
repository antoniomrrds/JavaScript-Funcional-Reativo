function smallestCommons(arr) {
  let [max, min] = arr
  if (min > max) [min, max] = [max, min]
 
  const numArray = (max <= 0 || max == undefined) ? 0 : Array(max-min+1).fill(0).map((n, i) => i + min )

  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);

  const lcm = (a, b) => a * b / gcd(a, b);
 
  return numArray.reduce((multiple, curr) => lcm(multiple, curr));
}

const result = smallestCommons([1, 5]);
console.log(result)