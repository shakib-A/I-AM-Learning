

function fun1(arr, target) {
    let results = [];

    for(let i = 0; i < arr.length; i++) {
       for(let j = i+1; j < arr.length; j++) {
        if(arr[i]+arr[j] === target) {
            results.push(arr[i])
            results.push(arr[j])
        }
       }
    }
    return results
}

console.log(fun1([9,1,3,4,5], 6))
console.log(fun1([1,2,3,4,5], 10))   