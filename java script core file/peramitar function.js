function hello(){
    let sum=0;
    for(var i=0; i<arguments.length;i++){

        var hridoy=arguments[i];
        sum+=hridoy
    }
    return sum;




}
var x=hello(1,6,7,9,6,0)
console.log(x);