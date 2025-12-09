// JavaScript Document
console.log("hi");


// HAMBURGERMENU 

var openButton = document.querySelector("header button");
openButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

//  PRODUCTINFORMATIE
// https://www.w3schools.com/howto/howto_js_accordion.asp

// var openInfo = document.querySelector("section:nth-of-type(3) li button");
// openInfo.onclick = Informatie;

// function Informatie() {
//   var productInformatie = document.querySelector("section:nth-of-type(3) p");
//   productInformatie.classList.add("toonInfo");
// }  NIET GELUKT