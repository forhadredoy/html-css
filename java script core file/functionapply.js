var hello={
    nam:"kichui na",
    hri: function(country){
        return this.eightrool-this.sevenrool+country

    }
}

var rool={
    sevenrool:66,
    eightrool:88,
}
var rool1={
    sevenrool:89,
    eightrool:80,
}
var subtract=hello.hri.apply(rool,["bangladesh"]);
var subtract1=hello.hri.apply(rool1,["bangladesh"]);
console.log(subtract)
console.log(subtract1)

