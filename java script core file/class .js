class hello{
    constructor(nam){
        this.fullname=nam;
       
    }
    hei(){

        return this.fullname+' '+"very good boy"
    }

}
var deteals=new hello("hridoy");
var deteals1=new hello("sumit")

console.log(deteals.hei())
console.log(deteals1.hei())



