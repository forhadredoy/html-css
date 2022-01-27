var object ={
    nam:'forhad',
    onno: function(country,city){
        return this.firstname+"   "+this.secondname+country+city
    
  }

}

var person1={
    firstname:"forhad hossain redoy",
    secondname:"soyad mohiful",

};
var person2={
    firstname:"mohammad foysal",
    secondname:"ojit das",
};
var allname=object.onno.call(person1,"bangladesh","dhaka");
console.log(allname);