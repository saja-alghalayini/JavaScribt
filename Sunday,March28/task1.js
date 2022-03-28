
'use strict';

let phoneForm = document.getElementById("mobForm")
let tableform = document.getElementById("tableCon")
let bigArray=[];

phoneForm.addEventListener("submit", getdatafrominput)
function getdatafrominput(event)
{
    event.preventDefault();
    console.log(" Saj ");

    let name= event.target.useName.value;
    let phnType=event.target.typeNameD.value;
    let price= Math.ceil (Math.random() * (190 - 60) +60);
    let condition = condition2 (price);
    
    console.log (name);
    console.log (phnType);
    console.log (price);
    console.log (condition);
    
}

function cont(name,phnType,price,condition)
{
    this.name=name;
    this.phnType=phnType;
    this.price=price;
    this.condition=condition;
    bigArray.push(this);
    console.log (bigArray)
    //storeinlocalstorage()

}

function condition2 (s)
{
 if (s >= 100)
 return "new";
 else
 return "used";
}


function storeinlocalstorage()
{
    let strng = JSON.stringify(salesarr[salesarr.length-1])
    localStorage.setItem( salesarr[salesarr.length-1].name ,strng )
}

function fromlocalstoarge ()
{
    let keyy = salesarr[salesarr.length-1].name ;
    let localstoargeitem = localStorage.getItem(keyy);
    let toobject = JSON.parse(localstoargeitem);
    return toobject;
}
