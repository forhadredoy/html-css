var arr=[88,44,98,67,89]
arr.push(9)//insert the last number
console.log(arr)
//arr.unshift(88);
arr[3]=undefined;//undefiend 
console.log(arr)
console.log(arr);
arr.splice(3,0,68)//insert the number 
console.log(arr)
arr.pop()//deleted last number
console.log(arr);
arr.shift()//deleted first number
console.log(arr);
arr.splice(4,1, 55);//deleted  the number 
console.log(arr)
