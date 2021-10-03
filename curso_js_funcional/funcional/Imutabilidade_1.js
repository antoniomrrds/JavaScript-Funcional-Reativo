const ordenar =array => [...array].sort((a,b) => a - b)



const nums = Object.freeze([3,1,7,9,4,6])

const mumsordernados = ordenar(nums)

console.log(nums,mumsordernados)

const parteNums = nums.slice(1)

console.log(parteNums,nums)

