function add(a, b, cb) {
  setTimeout(() => {
    const sum = a + b;
    cb(sum);
  }, 3000);
}

add(100, 200, (value) => {
  console.log(value);
});

function orderFood(cb) {
  setTimeout(() => {
    const food = "떡볶이";
    cb(food);
  }, 3000);
}

function cooldownFood(food, cb) {
  setTimeout(() => {
    const cooldownedFood = `${food} 식음`;
    cb(cooldownedFood);
  }, 2000);
}

function freezeFood(food, cb) {
  setTimeout(() => {
    const freedzedFood = `냉동된 ${food}`;
    cb(freedzedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(`${food} arrived`);
  cooldownFood(food, (food) => {
    console.log(`${food} 식었다. 먹어라`);
    freezeFood(food, (food) => {
      console.log(`${food} 얼림`);
    });
  });
});
