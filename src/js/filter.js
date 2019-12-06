'use strict'

let filterHeadButton = document.querySelector('.filter__button-top');
let filterHeadMob = document.querySelector('.filter__head--mobile');
let filter = document.querySelector('.filter');
let filtersList = document.querySelector('.filter__list');
let buttonCloseFilter = document.querySelector('.button-close-filter');

filterHeadButton.addEventListener('click', function(){
  // open/close filters list
  filtersList.classList.toggle('filter__list--hidden');
  // add/remove class that makes a filter fullscreen, available only on mobile width screen
  filter.classList.toggle('filter-active--mobile');
  if (window.screen.width<=767) {
    filterHeadButton.classList.toggle('dn');
    filterHeadMob.classList.toggle('dn');
  }
});

buttonCloseFilter.addEventListener('click', function(){
  filterHeadMob.classList.toggle('dn');
  filterHeadButton.classList.toggle('dn');
  filter.classList.toggle('filter-active--mobile');
  filtersList.classList.toggle('filter__list--hidden');
});

