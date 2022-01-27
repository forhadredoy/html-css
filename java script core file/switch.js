let date=(new Date().getDay());
console.log(date);
let text;

switch(date){
    case "sunday":
        text='saterday'
        break;
    case "1":
        text="sunday"
        break;
    case "2":
        text="monday"
        break;
    case "3":
        text="tuesday"
        break;

        default:
            text=("what is your number");

       
}
console.log( "today is "  + text)