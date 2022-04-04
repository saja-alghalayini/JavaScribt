


"use strict";

let num_1=prompt ("Enter the first number");
let num_2=prompt ("Enter the second number");
let operation=prompt ("Chose the opration +/-/*/");

let num=Number(num_1)
let num2=Number(num_2)


if (operation=="+")
{
   console.log(num+num2);
   document.write(num+num2);
}

if (operation=="-")
{
    console.log(num-num2);
    document.write(num-num2);
}

if (operation=="*")
{
    console.log(num*num2);
    document.write(num*num2);
}

if (operation=="/")
{
    console.log(num/num2);
    document.write(num/num2);
}




// let num1=2;
// let num2=10;

// let sum=num1+num2;
// console.log(sum);

// let num3=20;
// let num4=34;
// let sum1=num3+num4;
// console.log(sum1);


// function sumNum(num1,num2) 
// {
//   let sum3 =num1+num2;
//   return sum3;
//  }

// console.log(sumNum(2,10),"result of function one");

// console.log(sumNum(20,34),"result of function two");









// switch (operation)
//  {
//     case "+": let Addition = num_1 + num_2 ;
//             console.log(Addition)
//             break;
//     case "-": let Subtraction = num_1 - num_2;
//             console.log(Subtraction)
//             break;
//     case "*": let Multiblication = num_1 * num_2 ;
//             console.log(Multiblication)
//             break;
//     case "/": let Division = num_1 / num_2 ;
//             console.log(Division)
//             break;
// }