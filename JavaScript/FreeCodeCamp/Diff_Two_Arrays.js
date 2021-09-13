function diffArray(arr1, arr2) {



    let arr1Filtered = arr1.filter(valor => arr2.indexOf(valor) === -1);

    let arr2Filtered = arr2.filter(value => arr1.indexOf(value) === -1);

    return arr1Filtered.concat(arr2Filtered);




}

// let a = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
let a = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

console.log(a)