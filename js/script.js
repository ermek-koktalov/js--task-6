document.body.style.fontSize = "18px";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";

const id = document.getElementById("wrapper");
id.style.maxWidth = "1440px";
id.style.margin = "0 auto";
id.style.display = "flex";
id.style.marginTop = "150px";
id.style.marginBottom = "150px";

const container = document.createElement("div");
wrapper.prepend(container);
container.style.width = "350px";
container.style.height = "600px";
container.style.padding = "25px";
container.style.margin = "auto";
container.style.borderRadius = "20px";
container.style.backgroundColor = "hsl(216, 50%, 16%)";

const card = document.createElement("div");
container.prepend(card);
card.style.display = "block";

const img = document.createElement("img");
img.setAttribute("src", "img/image.jpg");
card.prepend(img);
img.style.width = "100%";
img.style.height = "300px";
img.style.marginBottom = "30px";
img.style.borderRadius = " 10px";

const title = document.createElement("h3");
card.append(title);
title.innerText = "Equilibrium #3429";
title.style.display = "inline";
title.style.color = "white";
title.style.fontWeight = "bold";

const subtitle = document.createElement("p");
card.append(subtitle);
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontWeight = "400px";
subtitle.style.letterSpacing = "1px";
subtitle.style.marginTop = "30px";
subtitle.style.marginBottom = "30px";
const elementContainer = document.createElement("div");
card.append(elementContainer);
elementContainer.style.display = "flex";
elementContainer.style.justifyContent = "space-between";

const left = document.createElement("div");
elementContainer.append(left);
const iconLeft = document.createElement("img");
iconLeft.setAttribute("src", "img/icon-ethereum.svg");
left.append(iconLeft);
const count = document.createElement("span");
count.innerText = "0.041 ETH";
left.append(count);
count.style.color = "hsl(178, 100%, 50%)";
count.style.marginLeft = "10px";

const right = document.createElement("div");
elementContainer.append(right);
const iconRight = document.createElement("img");
iconRight.setAttribute("src", "img/icon-clock.svg");
right.append(iconRight);
const days = document.createElement("span");
days.innerText = "3 days left";
right.append(days);
days.style.color = "hsl(215, 51%, 70%)";
days.style.marginLeft = "10px";

const line = document.createElement("hr");
card.append(line);
line.style.width = "300px";
line.style.border = ".3px solid hsl(215, 32%, 35%) ";
line.style.marginTop = "25px";

const author = document.createElement("img");
author.setAttribute("src", "img/image-avatar.png");
card.append(author);
author.style.width = "30px";
author.style.marginTop = "25px";

const creation = document.createElement("span");
creation.innerText = "Creation of";
card.append(creation);
creation.style.color = "hsl(215, 51%, 70%)";
creation.style.marginLeft = "15px";

const nameAuthor = document.createElement("span");
nameAuthor.innerText = "Jules Wyvern";
card.append(nameAuthor);
nameAuthor.style.marginLeft = "10px";
nameAuthor.style.color = "white";

alert("Я оцениваю свою работу на 90 баллов");
