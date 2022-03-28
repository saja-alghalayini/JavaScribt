'use strict';
/////////////Q.1//////////////

let numbers=[1,7,9,45]
let names =["Str", "alex","moh"]
let words= ["the", "fox", "over", "lazy", "dog"]

/////////////Q.2//////////////

banana=1
tomato=0

/////////////Q.3//////////////

let favFood=["pizza" , "Beef Burger",'Mansaf' , 'Kofta' , 'Waffle' ]
let favSport=["Basketball" , "Horse Riding", "skating" ]
let favMovies=[ "Pride and Prejudice" , "Avengers", "Sherlock Holmes: A Game of Shadows" ,"Rescued by Ruby"]

/////////////Q.4//////////////

function firstOFArray(s)
{
    return s=s[0];
}

//في المثال يلي اعطيتني ياه,
//array.splice (no. of elements that I want to change,  "here we put no. of index but without the cotetions ")

/////////////Q.5//////////////
function lastOFArray(s)
{
    return s= s[ s.length-1];//////[length-1] to make it return to the last value//////
}

/////////////Q.6//////////////

var array1= [0,5,7,9]; 
array1.shift()//removes the first element from an array and returns that removed element. This method changes the length of the array.///
array1.shift()///pop/removes the last element from an array and returns that element. This method changes the length of the array.///
array1.shift()
array1.unshift(1,3,4,6,8)
array1.push(10);
console.log(array1)//adds one or more elements to the beginning of an array and returns the new length of the array.///
//array.push(10);//adds one or more elements to the end of an array and returns the new length of the array.///


/////another solution/////

let array2=[1,2,3,4,5,6,,7,8,9]; //splice//method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it///
array2.splice() //replaces 1 element at index 4///
array2.splice()

/////////////Q.7//////////////

let array3=[5,9,-7,3.5];
array2.shift()
array2.push()
array2.push()
array2.pop(5)
array2.unshift(3.5)
console.log

///var array2 = [5,9,-7,3.5]
//array2.push(8,6)
//array2.unshift(1,10)
//array2.shift()
//array2.pop()
//console.log(array2);


/////////////Q.8//////////////

z=[1,4,5]
y=[4,6,9,7]
function middleOfArray (x) 
 {
  let xlength = (x.length);
  let odd= (xlength-1/2);
  let even1=(xlength-2/2);
  let even2=(xlength/2);
    
  if (xlength%2==0)
  {
  return x= x [even1], x [even2]
 }
  else
 {
  return x= x [odd]
 }
  
 }

/////////////Q.9//////////////



/////////////Q.11//////////////

let S= [1,2,3,8,9];
function arrayExceptLast9(S) 
{
    S.pop()
    console.log(S);
}
arrayExceptLast9(S)

/////////////Q.12//////////////

let s= [1,2,3,8,9];
function addToEnd(s)
{
s.pop()
s.push(55)
console.log(s);
}
addToEnd(s)

/////////////Q.13//////////////

let ss= [1,2,3,8,9];
function sumArray(ss)
{
    return (ss=0+1+2+3+4+5)
}

console.log(sumArray(ss));

/////////////Q.14//////////////

var min= [1,2,3,8,9]
function minInArray (min)
{
    console.log(min);
    return 
}
minInArray (min) 

/////////////Q.15//////////////

let remove= [1,2,3,8,9]
function removeFromArray(remove)
{
remove.splice(3,1)
console.log(remove);
}
removeFromArray(remove)

/////////////Q.16//////////////

let N= [1,2,3,8,9]
function oddArray(N)
{
 if (N%2!==0)
{
 console.log(N);
 return N
}
}
oddArray(N)