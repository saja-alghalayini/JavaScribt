

'use strict';

let firstName=document.getElementById('firstName');
let firstNameError=document.getElementById('firstName-error');
let lastName=document.getElementById('lastName');
let lastNameError=document.getElementById('lastName-error');
let sajFormx=document.getElementById('saj_form');
let birthdateError=document.getElementById('bd-error');
let info=[];


function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('formData',array);
}


function sajForm(firstName,lastName,bd,firstEmail,secEmail,password,secPassword){

this.firstName=firstName;
this.lastName=lastName;
this.firstEmail=firstEmail;
this.secEmail=secEmail;
this.bd=bd;
this.password=password;
this.spasssecPasswordword=secPassword;
this.fullName=userName(this.firstName,this.lastName);
this.correctDate=checkDate(this.bdbdte);
this.correctEmail=correctEmail(this.firstEmail,this.secEmail);
this.correctPssword=checkPassword(this.password,this.secPassword);
console.log(this.fullName);
info.push(this);
renderInfo();
LocalStorageFrom()
}


function userName(firstName,lastName){
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if ((regex.test(firstName)) && (regex.test(lastName))){
        console.log('correct');
        x = firstName + ' '+ lastName;
        return x;
    }
    else{
        return 'Incorrect name';
    }
}


function checkDate(date)
{
 let regex=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
 if(regex.test(date)){
     console.log('correct date');
     return date;
 }
 else{
     console.log('inncorrect date');
 }
}


function correctEmail(firstEmail,secEmail){
    let regex=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if ((!regex.test(firstEmail)) && (!regex.test(secEmail)))
    {
      return  'Incorrect Email!';
    }
    else{
        if (firstEmail==secEmail){
             console.log('Email has been confirmed');
             return 'Email has been confirmed';
        }
        else{
            console.log(`Emails don't match`);
            return `Emails don't match`;
        }
    }   
  }


function checkPassword(password,secPassword){
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[\d]){2,})[A-Za-z\d?]{8,32}$/;
    let num=/[\d]{2,}/;
    let capital=/[A-Z]/;
    let symboles=/[#$@!%&*?]/;
    if ((regex.test(password))&& (regex.test(secPassword))){ 
        console.log('password syntax is Incorrect');
        
    }
    else if((!capital.test(password[0])) && (!capital.test(secPassword[0]))){ 
        console.log('Incorrect! first name must be capital.');
    }
    else if((!num.test(password))&&(!num.test(secPassword))){
        console.log('You password must contain 2 numbers at least');
    }
    else if((!symboles.test(password)) && !symboles.test(secPassword)){
        console.log('You password must contain  at least 1 character');
    }
    else if((password===secPassword) &&(password.length>=8 && password.length<=32) &&(secPassword.length>=8 && secPassword.length<=32)){
        console.log('password syntax is correct');
        console.log('The first name is capital');
        console.log( 'Passwords match');
    }else{
        console.log(`Passwords don't match or the length is more than 8 or less than 32`);
    }
}




regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(e){
    e.preventDefault();
    let firstName=e.target.firstName.value;
    let lastName=e.target.lastName.value;
    let bd=e.target.bd.value;
    let firstEmail=e.target.firstEmail.value;
    let secEmail=e.target.secEmail.value;
    let password=e.target.password.value;
    let secPassword=e.target.secPassword.value;
    new regForm(firstName,lastName,bd,firstEmail,secEmail,password,secPassword); 
}
handelSubmit();
function renderInfo(){
}















































// 'use strict';

// let firstName=document.getElementById('firstName');
// let firstNameError=document.getElementById('firstName-error');
// let lastName=document.getElementById('lastName');
// let lastNameError=document.getElementById('lastName-error');
// let sajForms=document.getElementById('saj_form');
// let info=[];


// function sajForm(firstName,lastName,Email1,Email2)
// {
// this.firstName=firstName;
// this.lastName=lastName;
// this.Email1=Email1;
// this.Email2=Email2;
// this.fullName=userName(this.firstName,this.lastName);
// this.correctEmail=correctEmail(Email1,Email2);
// console.log(this.fullName);
// info.push(this);
// renderInfo();

// }


// //////////// Full Name/////////////


// function userName(firstName,lastName)
// {
//     let x;
//     let regex = /[a-zA-Z\s]+$/;
//     if ((regex.test(firstName)) && (regex.test(lastName)))
//     {
        
//         console.log('correct');
//         x = firstName + ' '+ lastName;

//         return x;
//     }
//     else
//     {
//         return 'Incorrect Name';
       
//     }
// }


// ////////////////Date////////////////


// function date_to_age(date)
// {
//         var today=new Date();
//         var d=new Date(date);

//         var year=today.getFullYear()-d.getFullYear();
//         var month=today.getMonth()-d.getMonth();
//         var day=today.getDate()-d.getDate();
//         var carry=0;

//         if (year < 0)
//             return 0;

//         if (month <= 0 && day <= 0)
//            { carry -= 1;

//         var age = parseInt(year);
//         age += carry;

//         return Math.abs(age);
//     }
//         else console.log(error.message);

// }

// ///////////Email///////////


// function correctEmail(Email1,Email2)
// {

//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email1))
//     {
//       return (true)
//     } 
       
//       alert("You have entered an invalid email address")
//       return (false)
// }
  

// sajForms.addEventListener('submit', handelSubmit);
// function handelSubmit(s)
// {
//     s.preventDefault();
//     let firstName=s.target.firstName.value;
//     let lastName=s.target.lastName.value;
//     let Email1=s.target.Email1.value;
//     let Email2=s.target.Email2.value;
//     new sajForm(firstName,lastName,Email1,Email2); 
// }


// handelSubmit();
// function renderInfo()
// {
//     info.map(function(i,index)
//     {
//         console.log('Hello');
//         firstNameError.innerHTML= info[index].fullName;
//     })
 
// }
