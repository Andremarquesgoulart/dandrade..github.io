// Paginação dos botões da Section Depoimento na Home
const previousButton = document.querySelector('.pagination-button.previous');
const nextButton = document.querySelector('.pagination-button.next');
const contentDepoimentos = document.querySelectorAll('.contentDepoimentos');

let currentPosition = 0;
const positions = [0, -100, -200];

previousButton.addEventListener('click', () => {
  currentPosition = currentPosition === 0 ? positions.length - 1 : currentPosition - 1;
  contentDepoimentos.forEach(content => {
    content.style.transform = `translateX(${positions[currentPosition]}%)`;
    content.classList.add('page-transition');
  });
});

nextButton.addEventListener('click', () => {
  currentPosition = currentPosition === positions.length - 1 ? 0 : currentPosition + 1;
  contentDepoimentos.forEach(content => {
    content.style.transform = `translateX(${positions[currentPosition]}%)`;
    content.classList.add('page-transition');
  });
});

// Remove a classe "page-transition" quando a transição terminar
contentDepoimentos.forEach(content => {
  content.addEventListener('transitionend', () => {
    content.classList.remove('page-transition');
  });
});














/*
const previousButton = document.querySelector('.pagination-button.previous');
const nextButton = document.querySelector('.pagination-button.next');
const contentDepoimentos = document.querySelector('.contentDepoimentos');

previousButton.addEventListener('click', () => {
  contentDepoimentos.classList.add('page-transition');
});

nextButton.addEventListener('click', () => {
  contentDepoimentos.classList.remove('page-transition');
});
*/