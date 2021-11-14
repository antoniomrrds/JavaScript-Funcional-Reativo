function numberPrimes(num = 0) {
    let prime = [];

    function sequencePrime(n = 0) {
        let d;
        if (n <= 1) return false;
        for (d = 2; d < n; d++) {
            if (n % d == 0)  // d divide n?
                return false;
        }
        return true;
    }

     Array(num + 1).fill().map((a, i) => {
        if (sequencePrime(i)) {
            prime.push(i)

        }
    })

    return prime
}
console.log(numberPrimes(20))