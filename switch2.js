let x = "1";
let text;
switch (x) {
  case '0':
    text = "Off";
    break;
  case "0":
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);