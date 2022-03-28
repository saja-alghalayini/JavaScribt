"use strict";

let num_1=prompt ("Enter the first number")
let num_2=prompt ("Enter the second number")
let operation=prompt ("Chose the opration +/-/*/")

let num=Number(num_1)
let num2=Number(num_2)

if (operation=="+")
{
    console.log(num+num2);
    document.write("num_1+num_2");
}

if (operation=="-")
{
    console.log(num-num2);
    document.write("num_1-num_2");
}

if (operation=="*")
{
    console.log(num*num2);
    document.write("num_1*num_2");
}

if (operation=="/")
{
    console.log(num/num2);
    document.write("num_1/num_2");
}

