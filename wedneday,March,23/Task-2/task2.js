

"use strict";

function myFunction() 
{ 
    var e = document.getElementById("demo");
    var c = window.getComputedStyle(e).backgroundColor;
 if (c === "rgb(0, 0, 0)") 
  {
    document.getElementById("demo").style.background = "rgba(95, 34, 194, 0.733)";
  } 
 else
  {
  document.getElementById("demo").style.background = "#000";
  }

}
