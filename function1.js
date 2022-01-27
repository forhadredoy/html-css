function array(a,b,c){

    console.log(arguments)
    sum=0;
    for(i=0;i<arguments.length;i++){
        sum=sum+arguments[i]

    }
    console.log(sum)

}
array(1,2,3)
array(4,5,6)