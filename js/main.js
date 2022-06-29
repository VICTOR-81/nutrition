window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector(".back__main").style.display = "block";
    } else {
        document.querySelector(".back__main").style.display = "none";
    }
}



const burger = document.querySelector('.header__menu-mobile__burger');
const burgerItem = document.querySelectorAll('.header__menu-mobile__burger > div');
const menu = document.querySelector('.header__menu-mobile > ul');
const menuItem = document.querySelectorAll('.header__menu-mobile > ul > li');
const header = document.querySelector('.header');

burger.addEventListener('click', function openMenu () {
  burgerItem.forEach(element => {
    element.classList.toggle("change");
  });
  menu.classList.toggle("open");
  if (menu.classList.contains("open")){
    header.style.position = 'fixed';
    document.body.style.position = 'fixed';
  } 
  else {
    header.style.position = 'static';
    document.body.style.position = 'static';
  }
});

menuItem.forEach(menuItem => {
  menuItem.addEventListener('click', menuClose => {
    menu.classList.remove("open");
    header.style.position = 'static';
    document.body.style.position = 'static';
  })
});