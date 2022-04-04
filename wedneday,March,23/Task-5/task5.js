

'use strict'

let buton =document.getElementById("submitButton");
buton.style.visibility = "hidden";


function Pass()
{
   let pass1 = document.getElementById("password1");
   let pass2 = document.getElementById("password2");
   let msg1 = document.getElementById("pass1Check");
   let msg2 = document.getElementById("pass2check");

      
   
   if(pass1.value.length >= 6){
       msg1.innerHTML = "Correct:the length is 6";
   }

   else{
       msg1.innerHTML="invalid: Length is too short";
   }
      
   

   if (pass1.value == pass2.value) {
       msg2.innerHTML= "Passwords Match";
       buton.style.visibility="visible";
   }
   else if(pass1.value != pass2.value ){
       msg2.innerHTML="The PasswordS Does NOT match";
   }

}