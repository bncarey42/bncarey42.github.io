import './assets/style/main.css';

let main = document.getElementById("app");

let title = document.createElement('h1');
title.classList.add('text-indigo-400');
title.innerText = 'PURPLE';

main.appendChild(title);