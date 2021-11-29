function dropElements(arr, func) {
    let test = []
    let resu
    resu = arr.findIndex(func)
    arr.filter((n, i, arr) => {
      console.log(i == resu)
      if (i == resu || i >= resu && i > resu) {
        if (resu == -1) {
  
          test = []
        } else {
  
          test.push(n)
        }
      }
    })
    //  let test = arr
  
    return test
  }
  
  
  
  
  
  let result =
    dropElements([1, 2, 3, 4], function (n) { return n > 5; })
  
  // dropElements([1, 2, 3, 4], function (n) { return n >= 3; })
  // dropElements([0, 1, 0, 1], function (n) { return n === 1; })
  
  // dropElements([1, 2, 3], function(n) {return n < 3; });
  console.log(result)