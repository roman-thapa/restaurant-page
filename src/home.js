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



const aboutUs = document.createElement("h2");
const aboutsContent = document.createElement("div");
const about = document.createElement('div');
const aboutContainer = document.createElement('div');
aboutContainer.className = "container--about"
about.className = "box";
aboutUs.innerText = "About Us";
aboutsContent.innerText = `Michael Wan's Mandarin name echoes worldwide, and diners arrive here from far and wide to feast on Cantonese dishes often called “the best in Europe”. For over six decades, this authentic Cantonese restaurant has pleased guests in its Blackpool location with delicately crafted dishes that are consistently excellent. Serving traditional dishes, you'll find everything from potstickers and barbecued spare ribs to Szechuan chilli beef and Nasi Goreng on the menu. Pick your favourites, let the staff recommend the best options, or go with one of the banquet options with pre-set starters and the main course. What keeps diners coming back is the care and attention put into every aspect. The sustainably rope-grown scallops are sourced locally from the waters near the Isle of Man, the spare ribs are marinated overnight to achieve the best flavour and texture, and the famous aromatic crispy duck is prepared using locally-grown Lincolnshire high-welfare ducks. In fact, this restaurant remains one of the very few places in the UK that still prepares this dish in-house using the traditional 3-day method consisting of marination, roasting, and leaving to rest and air dry.`;

about.appendChild(aboutUs);
about.appendChild(aboutsContent)
aboutContainer.appendChild(about)
container.appendChild(aboutContainer)




export default container;