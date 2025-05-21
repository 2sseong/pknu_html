// 옅은복사
const arr = [11,22,33,44,55]
const arr2 =arr
arr2[2] = 77
console.log(arr, arr2)
console.log(arr == arr2)
console.log(arr === arr2)

// ...배열 = 풀어서 들어감
// 깊은복사
const srr = [66,77,88,99,0]
const arr3 = [...srr]
arr3[2] =77
console.log(srr, arr3)
console.log(srr == arr3)
console.log(srr === arr3)


console.log(Math.max(arr3)) // NaN
console.log(Math.max(1,2,3,4,11,22,33,44)) // 44
console.log(Math.max(...arr3)) // 99 
