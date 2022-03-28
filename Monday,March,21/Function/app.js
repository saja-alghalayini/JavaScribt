

'use strict'

/////////////Q.1/////////////

function tellFortune (numchildren,namepartner,location,job)
{
  return "You will be "+ job + "in " + location + ", and married to " + namepartner + " and have " + numchildren + " kids";
} 
  
  document.getElementById("demo1").innerHTML= tellFortune ("Developer","Italy","Alice",2);

  /////////////Q.2/////////////
  function calculateDogAge (age)
   {

    let dogage=2*age
    return(` Your doggie is ${dogage} years old in dog years!`);
  }
  
  document.getElementById("demo2").innerHTML=calculateDogAge(1)

  /////////////Q.3/////////////

  function calculateSupply(age,amount)
   {
    let  maxage = 100;
    let needperday=(amount*365)*(maxage-age);
    return(` You will need ${needperday} cups of tea to last you until the ripe old age of${maxage}`);
   }
   
   document.getElementById("demo3").innerHTML=calculateSupply(30, 3)

   /////////////Q.4/////////////

   function greet(Name) 
   {
    return(`Hello ${Name}`)
   }
  greet("Saj")
  document.getElementById("demo4").innerHTML=greet("Saj")

  /////////////Q.5/////////////

  function double (i)
  {
    return 2 * i;
  }
  
  function double (i=7)
  {
    return 2 * i;
  }

  function double (i)
  {
    return 2 * '7';
  }
  document.getElementById("demo5").innerHTML= double();
  
  /////////////Q.6/////////////

  function double1(x) {
    return (2 * x) ;
  }
  
  function double2 (x){
  return 2 * x;
  }
  
  function double3 (x) {
    return 2 * x;
  }
  
  document.getElementById("demo6").innerHTML= double1(1)+" , "+ double2(2)+" , "+ double3(3);

  /////////////Q.7/////////////

  function cube (c) 
  {
    let cub = (c * c * c) ;
    return cub ;
  }
 
 document.getElementById("demo7").innerHTML=cube(2);
  
/////////////Q.8/////////////

function multiply (num1 , num2)
{
  return num1 * num2
}

document.getElementById("demo8").innerHTML=multiply(2,3); 

/////////////Q.9/////////////

function canIGetADrivingLicense(age)
{
  if (age >= 20)
  {
    return `Yes You Can`
  }

  else 
  {
   return `please come back after 1 years to get one`
  }

} 

document.getElementById("demo9").innerHTML= canIGetADrivingLicense(24)+" , "+ canIGetADrivingLicense(19);

/////////////Q.10/////////////

function sameLength( i, s)
{
  if ((i.length)==(s.length))
  {
     return (true);
  } 
     else 
  { 
    return (false);
  }

}
  
  document.getElementById("demo10").innerHTML= sameLength("tree","car")+" , "+ sameLength("tree","clue");

  /////////////Q.11/////////////

  function largerNubmer(num1, num2)
  {
    if (num1 > num2)
    {
      return num1;
    }
    else
    {
      return num2;
    }
  
  } 
  
  document.getElementById("demo11").innerHTML= largerNubmer(5,6) +" , "+ largerNubmer(5,3);

  /////////////Q.12/////////////

  function smallerNubmer(i,s,c)
  {

    if ((i<s) && (i<c)){
      return i;
    }
    else if ((s<i) && (s<c)) {
      return s;
    }
  
    else ((c<i) && (c<s)); {
      return c;
    }
  
  }
  
  document.getElementById("demo12").innerHTML= smallerNubmer(8,6,7) +" , "+ smallerNubmer(5,99,34)+" , "+ smallerNubmer(5,99,3) +" , "+ smallerNubmer(5,3,3) ;

  /////////////Q.13/////////////

   function shorterString (a,b,c,d,e)
  {
    let x=[a,b,c,d,e]
    let y=x[0];
    for (let i=0; i< x.length ; i++)
    {
      if (x [i] < y)
      {
        y=x[i]
      }
    }
    return y;
  }

   /////////////Q.14/////////////

   function longerString (a,b,c,d)
   {
     let x= [a,b,c,d]
     let y= x[0];
     for(let i=0 ; i<x.length; i++ )
     {
       if (x [i]> y )
       {
         y=x[i]
       }
     }
     return y;
   }

   /////////////Q.15/////////////

   function isEven(s)
   {
    if (s % 2==0 )
   {
     return true;
   }
    else 
   {
     return false;
   }
  
   }
  
  document.getElementById("demo15").innerHTML= isEven(1)+" , "+  isEven(2);

  /////////////Q.16/////////////

  function isOdd(s)
  {
  if (s%2 !==0)
    {
      return true;
    }
  else 
    {
      return false;
    }
  
  }
  
  document.getElementById("demo16").innerHTML= isOdd(4)+" , "+  isOdd(5);

  /////////////Q.17/////////////

  function positive(i) 
  {
  if (i>0)
    {
      return i;
    }
  
  else 
    {
      return (i*-1)
    }
  }
  
  document.getElementById("demo17").innerHTML=positive(4) +" , "+ positive(-5) ;

  /////////////Q.18/////////////

  function fullName(name1 , name2)
  {
    return name1+" "+name2;
  } 
  
  document.getElementById("demo18").innerHTML= fullName("Saj","Al Ghalayini") +" , "+fullName("Saj", "Al Ghalayini") ;
  