import header from "./header"
import images from "./images"
import homeContent from './home'
import contactContent from './contact'

const content = document.querySelector("#content");


content.appendChild(header);

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
const container = document.createElement("div");
content.appendChild(container)
container.appendChild(homeContent);

function handleHomeCLick() {
      container.removeChild(container.firstChild);
      container.appendChild(homeContent);
}

function handleMenuClick() {
    container.removeChild(container.firstChild);
    container.appendChild(images);
}

function handleContactClick() {
    container.removeChild(container.firstChild);
    container.appendChild(contactContent);
}

home.addEventListener('click', handleHomeCLick);
menu.addEventListener('click', handleMenuClick);
contact.addEventListener('click', handleContactClick);