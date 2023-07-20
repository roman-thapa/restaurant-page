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

const images = document.createElement("div");
const container = document.createElement("div");

images.className = "images";

container.appendChild(titleContainer);

function createAndAppendDiv(imgSrc, imgAlt, text) {
  const divElement = document.createElement('div');
  const imgElement = document.createElement('img');
  const textElement = document.createElement('div');

  imgElement.src = imgSrc;
  imgElement.alt = imgAlt;
  textElement.textContent = text;

  divElement.appendChild(imgElement);
  divElement.appendChild(textElement);

  return divElement;
}

images.appendChild(
    createAndAppendDiv(
        './top-view-delicious-noodles-concept.png',
        'top-view-delicious-noodles',
        'Noodles'
    )
)
        

images.appendChild(
  createAndAppendDiv(
    './stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks.png',
    'stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks',
    'Fry Chicken'
  )
);
images.appendChild(
  createAndAppendDiv(
    './fried-spring-rolls-cutting-board.png',
    'fried-spring-rolls-cutting-board',
    'Fried Spring Rolls'
  )
);
images.appendChild(
  createAndAppendDiv(
    './fried-ride.png',
    'Fri',
    'Fried Rice'
  )
);
images.appendChild(
  createAndAppendDiv(
    './fried-prawns.png',
    'Fried Prawns',
    'Fried Prawns'
  )
);
images.appendChild(
  createAndAppendDiv(
    './momo-soup.png',
    'Momo Soup',
    'Momo Soup'
  )
);

container.appendChild(images)

export default container;