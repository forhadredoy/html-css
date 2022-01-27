x = findMax(40,99,5,40,9,49);

function findMax() {
  let min=infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]<min) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(x);