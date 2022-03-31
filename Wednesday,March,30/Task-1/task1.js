

'use strict';

let firstName=document.getElementById('firstName');
let firstNameError=document.getElementById('firstName-error');
let lastName=document.getElementById('lastName');
let lastNameError=document.getElementById('lastName-error');
let sajForms=document.getElementById('saj_form');
let info=[];


function sajForm(firstName,lastName,Email1,Email2)
{

this.firstName=firstName;
this.lastName=lastName;
this.Email1=Email1;
this.Email2=Email2;
this.fullName=userName(this.firstName,this.lastName);
this.correctEmail=correctEmail(Email1,Email2);
console.log(this.fullName);
info.push(this);
renderInfo();

}
//////////// Full Name/////////////

function userName(firstName,lastName)
{
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if ((regex.test(firstName)) && (regex.test(lastName)))
    {
        
        console.log('correct');
        x = firstName + ' '+ lastName;

        return x;
    }
    else
    {
        return 'Incorrect Name';
       
    }
}
////////////////Date////////////////

function date_to_age(date)
{
        var today=new Date();
        var d=new Date(date);

        var year=today.getFullYear()-d.getFullYear();
        var month=today.getMonth()-d.getMonth();
        var day=today.getDate()-d.getDate();
        var carry=0;

        if (year < 0)
            return 0;

        if (month <= 0 && day <= 0)
           { carry -= 1;

        var age = parseInt(year);
        age += carry;

        return Math.abs(age);
    }
        else console.log(error.message);

}

///////////Email///////////

function correctEmail(Email1,Email2)
{

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email1))
    {
      return (true)
    } 
       
      alert("You have entered an invalid email address")
      return (false)
}
  
sajForms.addEventListener('submit', handelSubmit);
function handelSubmit(s)
{
    s.preventDefault();
    let firstName=s.target.firstName.value;
    let lastName=s.target.lastName.value;
    let Email1=s.target.Email1.value;
    let Email2=s.target.Email2.value;
    new sajForm(firstName,lastName,Email1,Email2); 
}
handelSubmit();
function renderInfo()
{
    info.map(function(i,index)
    {
        console.log('Hello');
        firstNameError.innerHTML= info[index].fullName;
    })
 
}