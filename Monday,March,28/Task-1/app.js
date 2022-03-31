

'use strict';


//////////////Q.1//////////////

let demo1;
function doubleNumbers(array) 
{
    demo1 =array.map(function(i,index)
    {
        return i2;
    });
}
doubleNumbers([2, 5, 100]);
console.log(Demo1);


//////////////Q.2//////////////

let Demo2;
function stringItUp(array)
{
    Demo2=array.map(function(i,index)
    {
    return i.toString();
    })
}
stringItUp([2, 5, 100])
console.log(Demo2);


//////////////Q.3//////////////

let Demo3;
function capitalizeNames(array)
{
    Demo3=array.map(function(i,index)
    {
        return i.toUpperCase();
    })
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
console.log(Demo3);


//////////////Q.4//////////////

let Demo4;
function namesOnly(array)
{
    newArray4=array.map(function(i,index)
    {
        return i.name;
    })
}

namesOnly([
    {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
   },
      {
         name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
           age: 16
      },
      {
          name: "Bob Ziroll",
           age: 100
      }
       ]);

       console.log(Demo4);


//////////////Q.5//////////////

let Demo5;
function makeStrings(array)
{
    Demo5=array.map(function(i,index)
    {
        let x='';
        if(i.age<18)
        {
            x='is under age!!';
        }
        else{
            x='can go to The Matrix';
        }
        return i.name + x;
    })
}
makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]); 

     console.log(Demo5);


//////////////Q.6//////////////

let Demo6;
function readyToPutInTheDOM(array)
{
    Demo6=array.map(function(i,index)
    {
        return `<h1> $ {i.name} </h1> <h2> $ {i.age} </h2>` ;
    })
}
readyToPutInTheDOM([
    {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]);
console.log(Demo6);


//////////////Q.7//////////////

let Demo7;
function doubleValues(array) 
{
    Demo7 =array.map(function(i,index)
    {
        return i2;
    });
}
doubleValues([1,-2,-3]);
console.log(Demo7);


//////////////Q.8//////////////

let Demo8;
function valTimesIndex(array){

    Demo8=array.map(function(i,index){
        
        return i*index;
} )
}
valTimesIndex([1,-2,-3]);
console.log(Demo8);

//////////////Q.9//////////////

function extractKey(arr, key)
{
    return arr.map(y => (y[key]));
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'))

//////////////Q.10//////////////

function extractFullName()
{
    let result = array.map(x => (x["first"]+" "+x["last"]));   
    return result;
  }
  console.log(extractFullName(
    [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]
  ))

