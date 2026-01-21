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

// Code van ChatGPT
const detail = document.getElementById('productbeschrijving');

function setDetailOpen() {
  if (window.innerWidth >= 640) { // 40em ≈ 640px
    detail.setAttribute('open', '');
  } else {
    detail.removeAttribute('open');
  }
}

// Bij laden en bij resizen
window.addEventListener('load', setDetailOpen);
window.addEventListener('resize', setDetailOpen);