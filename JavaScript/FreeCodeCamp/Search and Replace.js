function myReplace(str, before, after) {
    //Test 
    const regexTest = /[A-Z]/g
    const testBefore = regexTest.test(before)

    const regexReplace = new RegExp(`${before}`, 'gi')
    const regexFirstWord = /^[^]/g

    if (testBefore) {
        // first word uppercase
        const resultUppercase = after.replace(regexFirstWord, after[0].toUpperCase())
        after = resultUppercase
    } else if (!testBefore) {

        const resultLowerCase = after.replace(regexFirstWord, after[0].toLowerCase())
        after = resultLowerCase

    }


    const resultReplace = str.replace(regexReplace, after)

    return resultReplace;
}

const replace =

    myReplace("I think we should look up there", "up", "Down")

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(replace)