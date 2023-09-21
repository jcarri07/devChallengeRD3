const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const aHome = document.getElementById("home");
const aCollection = document.getElementById("collection");
const aAbout = document.getElementById("about");
const aContact = document.getElementById("contact");

// aCollection.addEventListener("click", ()=>  toggleSelected(aCollection.id) );

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

const elementos = [aHome, aCollection, aAbout, aContact];

function seleccionar(elemento) {
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].classList.remove("selected");
  }
  elemento.classList.add("selected");
}

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    seleccionar(elementos[i]);
  });
}
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);



