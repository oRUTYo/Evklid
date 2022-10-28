let form = document.querySelector('.header__nav-form');
let search_button = document.querySelectorAll('.header__search-link');
let close_button = document.querySelector('.header__form-close');

console.log(search_button);

search_button.forEach((e)=>{
  e.addEventListener('click',()=>{
    form.classList.toggle('header__nav-form--active');
  });
});

close_button.addEventListener('click', ()=>{
  form.classList.remove('header__nav-form--active');
});
