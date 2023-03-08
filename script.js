

let arr1 = [1, 2, 3, 4, 5, 6, 7,8 ,9, 10]


const arr3 = arr1.map(function(element) {
    console.log(element)
    return 1<<element
})

console.log(arr3)