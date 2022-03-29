

'use strict';


/////////////Q.1//////////////

let numbers=[1,7,9,45]
let names =["Str", "alex","moh"]
let words= ["the", "fox", "over", "lazy", "dog"]

/////////////Q.2//////////////

var fruits=["Tomato","Banana","Watermelon"]
console.log("the index of banana is:1");
console.log("the index of tomato is:0");
document.getElementById("Q.1").innerHTML="Q1: What is the index of Banana,Tomato,fruits=[Tomato,Banana,Watermelon]";
document.getElementById("answer1").innerHTML= "the index of banana is:1" + '<br>'+ "the index of tomato is:0";

/////////////Q.3//////////////

let favFood=["pizza" , "Beef Burger",'Mansaf' , 'Kofta' , 'Waffle' ]
console.log(favFood);

let favSport=["Basketball" , "Horse Riding", "skating" ]
console.log(favSport);

let favMovies=[ "Pride and Prejudice" , "Avengers", "Sherlock Holmes: A Game of Shadows" ,"Rescued by Ruby"]
console.log(favMovies);

document.getElementById("answer2").innerHTML= `My favourite_food is: ${favFood} <br> My favourite_sport is: ${favSport} <br> My favourite_movie is: ${favMovies}`;


/////////////Q.4//////////////

function firstOFArray(s)
{
    return s=s[0];
}
console.log(firstOFArray([1,4,5]));
console.log(firstOFArray(["t","u","g","x"]));

document.getElementById("answer3").innerHTML= `firstOfArray([5,2,4]) is: ${firstOFArray([1,4,5])} <br> firstOfArray(["t","y","u","x"] is ${firstOFArray(["t","u","g","x"])}`;

//في المثال يلي اعطيتني ياه,
//array.splice (no. of elements that I want to change,  "here we put no. of index but without the cotetions ")

/////////////Q.5//////////////

function lastOFArray(s)
{
    return s[ s.length-1];  ///[length-1] to make it return to the last value//////
}

console.log(lastOFArray([1,4,5]));
document.getElementById("answer5").innerHTML=`lastOFArray([1,4,5]) is ${lastOFArray([1,4,5])}`;


/////////////Q.6//////////////

var demo6= [0,5,7,9]; 
array1.shift();  //removes the first element from an array and returns that removed element. This method changes the length of the array.///
array1.shift();  ///pop/removes the last element from an array and returns that element. This method changes the length of the array.///
array1.shift();
array1.unshift(1,3,4,6,8);
array1.push(10);   //adds one or more elements to the beginning of an array and returns the new length of the array.///
console.log(demo6);
document.getElementById("answer5").innerHTML= demo6;
//array.push(10);//adds one or more elements to the end of an array and returns the new length of the array.///


/////another solution/////

// let array2=[1,2,3,4,5,6,,7,8,9]; //splice//method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it///
// array2.splice() //replaces 1 element at index 4///
// array2.splice()

/////////////Q.7//////////////

let demo7=[0,5,7,9];
array2.shift();
array2.pop();
array2.pop();
array2.shift(9,-7,3.3);
array2.unshift(3.5);
console.log(demo7);
document.getElementById("answer7").innerHTML=`[0,5,7,9] is ${demo7}`;


/////////////Q.8//////////////

z=[1,4,5]
y=[4,6,9,7]

function middleOfArray (x) 
 {
  let xlength = (x.length);
  let odd = (xlength-1/2);
  let even1=(xlength /-2);
  let even2=(xlength  /2);
    
  if (xlength%2==0)
  {
  console.log(x [even1], x [even2]); 
 }
  else
 {
  return x= x [odd]
 }
  
 }

/////////////Q.9//////////////


let animals = ['cat', 'ele', 'bird'];
  animals [0] ="zebra";
  animals [1] ="elephant";
  animals.pop();
  console.log(animals);

/////////////Q.10/////////////

function indexOfArray(nums,index) 
{
    for (let index = 0; index < array.length; index++) 
    {
        const element = array[index];
        console.log("element " +element+"index " +index);
    }
}

  let nums= [1,2,3,8,9];
  indexOfArray(nums,2);
  indexOfArray(nums,4);
  indexOfArray(nums,1);
  indexOfArray(nums,3);
  indexOfArray(nums,5);
  console.log(nums);

/////////////Q.11//////////////

let S= [1,2,3,8,9];
function arrayExceptLast9(S) 
{
    S.pop()
    console.log(S);
}
arrayExceptLast9(S)

/////////////Q.12//////////////

function  addToEnd(num) 
{
    nums1.push(num); 
    return nums1;   
}
  let nums1=[1,2,3,8,9];
  console.log(addToEnd(5));
  console.log(addToEnd(11)); 

/////////////Q.13//////////////

let number= [1, 2, 3, 4];
function sumArray(number)
{
    let sum = 0;
  for (let i = 0; i < number.length; i++) {
      sum += number[i];
  }
   return sum;
  }
  console.log(SumArray(number));


  function sumArray (number)
  {
    let i= 0;
    let sum =0;
    while (i< number.length) 
    {
      sum+=number[i];
      i++;
    }
    return sum;
  }
  console.log(sumArray(number));

/////////////Q.14//////////////

function minInArray(num) {
    let smallestNum = num[0];
    for (let i = 1; i < num.length; i++) {
      if(num[i] < smallestNum) {
        smallestNum = num[i];   
      }
    }
    return smallestNum;
  }
  
  
  let num= [10,2,3,8,9];
  console.log(minInArray(num));
  
  
  function MinInArray(num) {
    let i = 1;
    let smallestNum = num[0];
  
    while (i < num.length) {
      if(num[i] < smallestNum){
        smallestNum = num[i];
        i++;
      }
      return smallestNum;
    }
  }
  console.log(MinInArray(num)); 

/////////////Q.15//////////////

let remove= [1,2,3,8,9]
function removeFromArray(remove)
{
remove.splice(3,1)
console.log(remove);
}
removeFromArray(remove)

/////////////Q.16//////////////

function oddArray(array) 
{
    let i=0;
    let num=array.indexOfArray;
    while(num<length-1)
    {
      i++;
      if(num % 2 == 0){
      num.shift(array[i]);
    }
      else
      {
        break;
      }
    }
    return array;
}
  let array=[1,2,3,8,9];
  console.log(oddArray(array));


  


     


