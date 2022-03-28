let x=prompt('number 1');
let y=prompt('number 2');
let z=prompt('number 3');

let x_num=Number(x);
let y_num=Number(y);
let z_num=Number(z);

if((x_num%3==0) || (y_num%3==0) || (z_num%3==0))
{
    console.log('fizz');
    document.write('fizz');
}

else {console.log('This number can not be divided by 3');}

if( (x_num%5==0) || (y_num%3==5) || (z_num%5==0)) ///so Important/// if else///

{
console.log('buzz');
document.write('buzz');
}

else{
    console.log('This number can not be divided by 5');
}

if (((x_num%3==0)&&(x_num%5==0)) || ((y_num%3==0) && (y_num%5==0)) || ((z_num%3==0) && (z_num%5==0))){
    console.log('fizz buzz');
    document.write('fizz buzz');
}

else{
    console.log('This number "can"t ');
}