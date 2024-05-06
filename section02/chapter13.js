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
