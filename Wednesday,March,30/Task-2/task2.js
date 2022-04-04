

'use strict';

let result=document.getElementById('result');

function GetDataFromLovalStorage(){
    let storageData=localStorage.getItem('formData');
    let parseData=JSON.parse(storageData);
    console.log(parseData);
    renderInformation(parseData)
}
GetDataFromLovalStorage()

function renderInformation(parseData)
{
    parseData.map(function(i)
    {
    result.innerHTML= `Hello, this is ${i.firstName} ${i.lastName}, I was born in ${i.bd} and that's my Email ${i.firstEmail}`;
    })
}