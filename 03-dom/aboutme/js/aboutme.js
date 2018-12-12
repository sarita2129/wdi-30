document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'Groucho, Harpo, Chico';
document.getElementById('hometown').innerHTML = 'Sydney';

const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const myStupidHead = document.createElement('img'); // Detached DOM node
myStupidHead.src = "http://fillmurray.com/700/450";
document.body.appendChild(myStupidHead);
