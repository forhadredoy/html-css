var obj1={
    a:77,
    b:79
}
var obj2={
    a:77,
    b:79
}
if(obj1.a==obj2.a && obj1.b==obj2.b)
{
    console.log("true")
}
else{
    console.log("false")

}
console.log(JSON.stringify(obj1)==JSON.stringify(obj2));

