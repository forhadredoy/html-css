const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits.delete("apples"));
  console.log(fruits.has('bananas'));
  console.log(fruits.entries());
  console.log(fruits.size);
  