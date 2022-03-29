
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

document.getElementById("demo1").innerHTML= 'hi my name is'+me.firstName+ " that is my last name +me.lastName+ 'that is my age'+me.age+ 'this is my birthday'+me.bd+ 'those are my favorite movies'"+me.favmovies+" 'those are my favorite dishes'"+me.favfood;


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

  