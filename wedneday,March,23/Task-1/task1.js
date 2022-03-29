

'use strict'

document.getElementById("saj").onmouseover = function()
{
  this.textContent = "Can I help you?";
}

document.getElementById("saj").onmouseleave = function()
{
  this.textContent = "Hello World!";
}