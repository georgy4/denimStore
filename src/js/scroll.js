'use strict'


let categoryTop = document.querySelector('.category-section').getBoundingClientRect().top;
document.querySelector('.to-bottom').addEventListener('click', function(){
  console.log("window coords " + window.screenY);
  console.log("category top coords " + categoryTop);
  window.scrollTo(0, categoryTop-70);
  console.log("window final coords " + window.screenY);
});
