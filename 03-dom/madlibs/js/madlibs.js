const libIt = document.getElementById('lib-button');

const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;

  const story = `${ name } really likes ${ adjective } ${ noun }`;

  document.getElementById('story').innerHTML += `<p>${ story }</p>`;
};

libIt.addEventListener('click', makeMadLib);
