let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
arr1.forEach((v, i, a) => {
  console.log(v * 2, i, a);
  arr2.push(v * 2);
});

console.log(arr1, arr2);
console.log(arr2.includes(2));
console.log(arr2.indexOf(100), arr2.indexOf(2));

let fi = arr2.findIndex((v) => v == 5);
console.log(fi, arr2[fi]);

arr3 = arr2.sort((a, b) => {
  return b - a;
});
console.log(arr2, arr3);
