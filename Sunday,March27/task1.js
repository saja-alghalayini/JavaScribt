
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
    this.name = name;
    this.phnType = phnType;
    this.price = price;
    this.condition = condition;
    bigArray.push(this);
    console.log (bigArray)

    storeinlocalstorage()

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
    let Strng = JSON.stringify(bigArray[bigArray.length-1])
    localStorage.setItem( bigArray[bigArray.length-1].name ,Strng )
}

function fromlocalstoarge()
{
    let saj = bigArray[bigArray.length-1].name ;
    let localstoargeitem = localStorage.getItem(saj);
    let toObject = JSON.parse(localstoargeitem);
    if(toobject !== null)

    return toObject;  // toObject: This method returns a cloned object.
}



function showData()
{
let getfromlocalstoarge = fromlocalstoarge();
 console.log(getfromlocalstoarge); 

 let table = document.createElement("tableRow");
 tablebody.appendChild(table); 

 let table2 = document.createElement("tableData");
 tabledt1.innerText = getfromlocalstoarge.name;
 console.log(table2);

 let table3 = document.createElement("tableData");
 table3.innerText = getfromlocalstoarge.ptype;
 
 let table4 = document.createElement("tableData");
 table4.innerText = getfromlocalstoarge.price;
 
 let table5 = document.createElement("tableData");
 table5.innerText = getfromlocalstoarge.isnew;
 tablerow.append(table2,table3,table4,table5)   
}