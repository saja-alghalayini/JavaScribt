

'use strict'

/////////////Q.1////////////


function subtract(s)
{
  let num=s;
  let i=s-1;
  while(i>0)
  {
   num=num-i;
   i--;
  } 
    return num;
  }

document.getElementById("demo1").innerHTML=subtract(5);

/////////////Q.2////////////

function factorial (s)
{
    let total = 1 ;
    while (s > 0)
    {
        total = total * s ;
        s--;

    }
    return total ;
}

/////////////Q.3////////////

function repeatStr(string,num) 
 {
    let repeatStr="" ;
    while(num>0){
        repeatStr+=string;
        num--;
    }
    return repeatStr
  }
 document.getElementById("demo3").innerHTML=(repeatStr("to" +" " ,4));

/////////////Q.4////////////

 function sum2 (x,y)
{
    let total = y;
    for ( let i = x; i<y ; i++)
    {
        ///don't know what to do here///
    }
    return total ; 
}

/////////////Q.5////////////

function repeatStr2 (x , y)
{
    let count = y.length;
    let sum = "";
    for(let i = 0 ; i < count ; i++)
    {
        sum = sum + " " + x;
    }
    return sum ;
}

/////////////Q.6////////////

function multiOf (i,s,x)
{
  return i * Math.pow(s,x) //Math.pow() is used to calculate a number raise to the power of some other number//
}

/////////////Q.7////////////

function muti2 (x ,s)
{
    let total = 1;
  for (let i = x; i<=s ; i++)
    {
      total = total * i;
    }
  return total ; 
}

/////////////Q.10////////////

function multiplication2 (x,s)
{
    let sum = 0;
    for(let i=0 ; i<s ;i++ )
    {
      sum+=x;   //Sum+=x is a shorthand of Sum = Sum + x;
    }
    return sum
}

/////////////Q.11////////////