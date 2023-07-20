const header = document.createElement("header");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
const logo = document.createElement("img");

logo.src = "./logo-white.png";
logo.alt = "Mandarin white logo";
logo.className = "logo--white";

menu.innerText = "Menu";
contact.innerText = "Contact";
menu.id = "menu";
contact.id = "contact";
home.innerText = "Home";
home.id = "home";


header.appendChild(logo);
header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

export default header;