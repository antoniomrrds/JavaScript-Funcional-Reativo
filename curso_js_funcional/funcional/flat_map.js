//flat(Infinity) = esta estrutura te ajuda a varrer todo array idependente dos seus subiniveis


const nestedLetters = [
    ['O',['l'],'a'],
    [' '],
    ['m',['u',['n']],'d','o'],
    ['!','!','!','!']
]

const letters = nestedLetters.flat(Infinity)

const result = letters 
    .flatMap(l => [l,','])
    .reduce((a,b) =>  a+b)

    console.log(result)
