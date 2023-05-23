//pure functions

function add(num1, num2)
{
    return num1+num2;
} 
console.log(add(2,8));
console.log(add(100,44))

//impure functions

function add1(num3, num4)
{
    return num3+Math.random();
}
console.log(add1(2,5));


//Immediately Invoked Function Expression (IIFE)


let c=(function sub(a,b)
{
    let res=a-b;
    return res;
    console.log(res);


}) (4,2)
console.log(c);

//anonymous Function

let af=function(num, num0)
{
    return num*num0
    
}
console.log(af(2,11));

//Arrow Functions


let a1=(n1,n2)=>
{
     return n1/n2;
}
console.log(a1(4,2));

