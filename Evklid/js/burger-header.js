let burger = document.querySelector('.burger');
let nuv = document.querySelector('.header__nav');
let nuv_links = document.querySelectorAll('.header__item-link');
let close_x = document.querySelector('.close-x');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('burger--active');
  nuv.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

close_x.addEventListener('click', ()=>{
  burger.classList.toggle('burger--active');
  nuv.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

nuv_links.forEach(function(el){
  el.addEventListener('click', ()=>{
    burger.classList.remove('burger--active');
    nuv.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});
