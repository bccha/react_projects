let o1 = {
  a: 1,
  b: 2,
  c: 3,
};

let o2 = { ...o1 };
let o3 = o1;

console.log(o1, o2);
console.log(o1 === o2, o1 === o3);
console.log(JSON.stringify(o1) === JSON.stringify(o2));

let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = [...arr1];

console.log(arr1 === arr2);
console.log(arr1 === arr3);

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr1));

let numbers = [1, 2, 3];
console.log(Object.keys(o1));
