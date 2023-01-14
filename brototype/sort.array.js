arr=[1,4,3,7,2,0,8]
console.log("inputed array=",arr)
arr.sort()
arr.reverse()
console.log("desending array=",arr)
arr.shift()
arr.push(45)
console.log(arr)
a=[45,6,7]
console.log(arr.concat(a))

//slice()
arr1=[1,2,3,4,5,6]
console.log(arr1.slice(1,5))

arr2=[[7,8,9],[10,11,12],[13,14,15]]
let ab=[].concat(...arr2)
console.log(ab)
bf=[].concat(3 ,4)
console.log(bf)
console.log(...arr2)
