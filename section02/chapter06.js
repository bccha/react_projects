let arr = [1, 2, 3];

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

arr.forEach((v) => {
  console.log(v);
});

let o1 = {
  name: "cha",
  age: 100,
  money: 500,
};

for (let i of arr) {
  console.log(i);
}

for (let i of Object.keys(o1)) {
  console.log(i, o1[i]);
}

for (let i of Object.values(o1)) {
  console.log(i);
}

for (let k in o1) {
  console.log(k, o1[k]);
}
