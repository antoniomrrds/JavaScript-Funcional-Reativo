function sumPrimes(num = 0) {
    const prime = [];

    let sumPrime = 0



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


    prime.filter((currentElement) => {
        if (currentElement <= num)
            sumPrime += currentElement
    })
    return sumPrime
}
console.log(sumPrimes(977))