'use strict';

let newArray;
let ulparent=document.getElementById('testli');
async function getData ()
{
  let response= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.a60424c1031ca27137e3c4735945b19c&q=aqaba&format=json')
  console.log(response);
  let data = await response.json();
  console.log(data);
  newArray=data.map((x,y)=>
  {
      let lichild=document.createElement("li");
  }
  
  );      
}

console.log("get data out side the function");
getData();
console.log(newArray);


