function hello(){

    console.log(arguments)
    sum=0;
    
    for(i=0; i<arguments.length;i++){
        sum=sum+arguments[i]


    }
    console.log(sum);

}
hello( 1,2,3)
hello (4,5,6)
hello (7,8,9)
hello(7,99,09,78)
hello (7,44,55,66)