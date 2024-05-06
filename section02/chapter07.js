let arr = [1, 2, 3];

let len = arr.push(6, 7, 8, 9);

console.log(len, arr);

let a = arr.pop();
console.log(a, arr);

let b = arr.shift();
console.log(b, arr);

len = arr.unshift(100);
console.log(len, arr);

arr2 = arr.slice(1, 5);
arr3 = arr.slice(2);
console.log(arr, arr2, arr3);
console.log(arr.slice(-1));

arr4 = arr2.concat(arr3);
console.log(arr2, arr3, arr4);
