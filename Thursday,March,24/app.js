

'use strict';

/////////////Q.1//////////////

let me={
    firstName:'Saja',
    lastName:'AL Ghalayini',
    age:'20',
    bd:'14.3.2002',
    favfood:['Beef Burger','Pizza','Mansaf'],
    favmovies:['Sherlock Holmes','Enola','Avengers','Pride and Prejudice','Rescued by Ruby']
};

document.getElementById("demo1").innerHTML= 'hi my name is'+me.firstName+ " that is my last name +me.lastName+ 'that is my age'+me.age+ 'this is my birthday'"+me.bd+" 'those are my favorite movies'"+me.favmovies+" 'those are my favorite dishes'"+me.favfood;

////////////The join() method returns an array as a string/////////////


///////////////Array////////////////

let persons=[
    {name: {first:'John', last:'Hob'}, age:35},
    {name: { first: 'Alex', last: 'Mercer' }, age:25 },
    {name: { first: 'Alice', last: 'Zaheer' }, age:24},
    {name: { first: 'Zues', last: 'Odin' }, age:55 },
    {name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];


/////////////Q.2//////////////

let firstName=[];
function firstName(persons)
{
for (s=0; s < persons.length; s++)
{
    firstName[s] = persons[s].name['first'];
}
return persons
}
console.log (firstName(persons))
document.getElementById("demo2").innerHTML =persons ;

/////////////Q.3//////////////

function averageAge(persons)
{
firstName =0;
for ( let i=0; i<persons.length; i++){
firstName += persons[i].age / 2
}
return firstName
}

console.log(averageAge(persons))
console.log(firstName(persons))
document.getElementById("demo3").innerHTML =firstName;

/////////////Q.4//////////////

function olderPerson(person) 
{
    let max = persons[0].age;
    let oldername = "";
  
    for (let i = 0; i < persons.length; i++) 
    {
      if (max < persons[i].age) 
      {
        max = person[i].age;
        oldername = persons[i]['name']['first'] + ' ' + persons[i]['name']['last'];
      }
    }
  
    return oldername;
  
}
  document.getElementById("demo4").innerHTML = max ;



  /////////////Q.7//////////////

  function repeatWorld(string) 
  {
    let subString=string.toLowerCase().split(' ');
    let obj={};
    let count;
    for(let i=0; i<string.length; i++)
    {
      let objIndex=obj [subString[i]];
      
    }
  }


  /*
  7
  Create a function called repeatWord
  that accept a string
  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to words??
  
  Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */
  
  function repeatWord(string) 
  {
    let array = string.split(' ');
    let obj = {};
    for (let i = 0; i < array.length; i++) 

    {

      if (obj[array[i].toLowerCase()]) 
      {
        obj[array[i].toLowerCase()] += 1
      } 
      else 
      {
        obj[array[i].toLowerCase()] = 1
      }
    }
    return obj;
  }
  

  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */

  function repeatChar(str) {
    let arr = str.split('');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].toLowerCase()]) {
        obj[arr[i].toLowerCase()] += 1
      } else {
        obj[arr[i].toLowerCase()] = 1
      }
    }
    return obj;
  }
  
  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  
  function selectFromObject(object, array) 
  {
    let result = {}
    for (let i = 0; i < array.length; i++) 
    {
      if (object[array[i].toLowerCase()]) 
      {
        result [array[i].toLowerCase()] = object[array[i].toLowerCase()]
      }
    }
      return result;
  }


  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */

  function objectToArray(object) 
  {
    let result = [];
    for (let key in object) 
    {
      result.push(key)
      result.push(object[key])
    }
    return result;
  }
  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  
  function arrayToObject(array) 
  {
    let object = {};
    for (let i = 0; i < array.length; i += 2) 
    {
      object[array[i]] = array[i + 1];
    }
    return object;
  }
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */

  function onlyNumber(object)
   {
    let result = {}
    for (let key in object) 
    {
      if (typeof object[key] === "number")
       {
        result[key] = object[key];
      }
    }
    return result;
  }
  
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */

  function onlyString(object) 
  {
    let result = {}
    for (let key in object) 
    {
      if (typeof object[key] === "string") 
      {
        result[key] = object[key];
      }
    }
    return result;
  }
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */

  function onlyArray(object) 
  {
    let result = {}
    for (let key in object) 
    {
      if (Array.isArray(object[key])) 
      {
        result[key] = object[key];
      }
    }
    return result;
  }
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */

  function keysArray(object) 
  {
    let result = [];
    for (let key in object) 
    {
      result.push(key);
    }
    return result;
  }
  