"use strict"

let x =prompt("Enter a number");

switch(x) {

    case "1":
        console.log("Sunday");
        x=("Sunday");
        break;
    
        case "2":
            console.log("Monday");
            x=("Monday");
            break;

        case "3":
            console.log("Tuesday");
            x=("Tuesday");
            break;

        case "4":
            console.log("Wednesday");
            x=("Wednesday");
            break;

        case "5":
            console.log("Thursday");
            x=("Thursday");
            break;

        case "6":
            console.log("Friday");
            x=("Friday");
        break;  
        
        case "7":
            console.log("Saturday");
            x=("Saturday");
        break;

        
            
            
}

{document.getElementById("today").innerHTML=x;}