//'use strict'
//x=88;
//console.log(x)
'use strict'
myfunction();
function myfunction(){
    x=88;
    console.log(x);
}

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
'use strict'
object={a:8,b:7}
console.log(object)

"use strict";
let x = 3.14;
delete x; 
console.log(x);
"use strict";
function x(p1, p2) {};
delete x;    
"use strict";
function x(p1, p1) {}; 

"use strict";//Octal numeric literals are not allowed:
let x = 010;
"use strict";
let x = "\010";    //octal escape are not allowed.
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;      
"use strict";//Deleting an undeletable property is not allowed:
delete Object.prototype; // This will cause an error

"use strict";
let eval = 3.14;   //eval can't use
"use strict";
let arguments = 3.14; //argument cant't use
"use strict";
with (Math){x = cos(2)}; //with statement can't allowed