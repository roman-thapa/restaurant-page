const container = document.createElement("div");
const titleContainer = document.createElement("div");
const title = document.createElement("h1");
const logo = document.createElement("img");

titleContainer.className = "titleContainer";

logo.src = "./mandarin-logo.png";
logo.alt = "Mandarin logo";
logo.className = "logo";

title.innerText = `Michael Wan's Mandarin`;

titleContainer.appendChild(logo);
titleContainer.appendChild(title);

container.appendChild(titleContainer);

const contactUs = document.createElement("h2");
const contactsContent = document.createElement("div");
const contact = document.createElement('div');
const contactContainer = document.createElement('div');
contactContainer.className = "container--contact";

contactUs.innerText = "Contact";
contactsContent.innerText = `Michael Wan's Mandarin
27 Clifton Street,
Blackpool
Lancashire,
FY1 1JD

01253 622687

info@michaelwansmandarin.co.uk`;

contact.className = "box";

contact.appendChild(contactUs);
contact.appendChild(contactsContent);

contactContainer.appendChild(contact);

container.appendChild(contactContainer)

export default container;