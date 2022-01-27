
class lame{
    constructor(name,year,price,colur){

        this.nam=name;
        this.bochor=year;
        this.dam=price;
        this.rong=colur;
    }
age(){

        var date=new Date();
        return date.getFullYear() -this.bochor
    }
        

}
var car1=new lame("micro",2011,99,'red')
var car2=new lame("kalosaki",2025,89,'yellow')
console.log(car1.age())


