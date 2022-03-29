

'use strict';

let locform = document.getElementById("mobForm");
let pargloc =  document.getElementById("cityResult")




function getvalue(location)
{
     this.location = location;
     
     outputlocation(location);

}

async function outputlocation(x)
{
    let respone = await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.a60424c1031ca27137e3c4735945b19c&q=aqaba&format=json')
    let data = await respone.json()
   
   
   let createname = document.createElement("span");
   pargloc.appendChild(createname)
   createname.innerHTML= `Location Name: ${data[0].display_name} <br>
   lot: ${data[0].lat}
   lon: ${data[0].lon}
   <br>`
   let imgsrc = data[0].icon
   console.log(imgsrc);
   document.getElementById("imgg").src = `${imgsrc}`
    
    console.log(data);


}

locform.addEventListener("submit" , getfromform ) 
function getfromform(event) 
{
    event.preventDefault();

    let location = event.target.locName.value ; 
    console.log(location);
    new getvalue(location)



}
 getfromform();