let tabsBtn = document.querySelectorAll('.section-work__link');
let tabsItem = document.querySelectorAll('.section-work__card');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function(btn){ btn.classList.remove('section-work__link--active')});
    e.currentTarget.classList.add('section-work__link--active');

    tabsItem.forEach(function(element){element.classList.remove('section-work__card--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('section-work__card--active');
  });
});
