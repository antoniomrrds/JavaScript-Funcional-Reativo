const nums = [4,8,3,2,9,1,9,3]

// #3 recursividade 
function somarArray(array, total =0){
    if(array.length === 0){
        return total

    }
    return somarArray(array.slice(1),total + array[0])
}

const totalRecursivo = somarArray(nums)
console.log(totalRecursivo)

// //# 2 reduce

// const somar = (a,b) => a+b
// const totalreduce = mums.reduce(somar)
// console.log(totalreduce)

//#1 dados mutaveis !
// let totalFor = 0 
// for(let index =0 ; index < nums.length;index++ ) totalFor +=nums[index] 
// console.log(totalFor)