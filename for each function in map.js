const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  fruits.forEach (function(value, key) {
    var hei= key +  ' = ' +' '+  value+' ';
    console.log(hei)
  })
  