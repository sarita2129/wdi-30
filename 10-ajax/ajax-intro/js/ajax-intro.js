// Make an AJAX request for Number API data and show it on the page

const xhr = new XMLHttpRequest(); // Create a lil Javascript browser
xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the browser

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return; // Request is still in progress so don't do anything yet.
  }

  // Turn the JSON string into an actual JS object
  const data = JSON.parse( xhr.responseText );
  console.log(xhr.responseText, data);
  document.body.innerHTML = data.text;
}

xhr.send(); // Press enter: start the ASYNCHRONOUS request
