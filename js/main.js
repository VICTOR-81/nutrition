window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.querySelector(".back__main").style.display = "block";
        if (window.innerWidth > 500) {
          document.querySelector(".back__main").href = "#main"
        } else {
          document.querySelector(".back__main").href = "#top"
        }
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
    document.querySelector('.main').style.marginTop = "40px"
  } 
  else {
    header.style.position = 'static';
    document.body.style.position = 'static';
    document.querySelector('.main').style.marginTop = "0px"
  }
});

menuItem.forEach(menuItem => {
  menuItem.addEventListener('click', menuClose => {
    menu.classList.remove("open");
    header.style.position = 'static';
    document.body.style.position = 'static';
    document.querySelector('.main').style.marginTop = "0px";
    burgerItem.forEach(element => {
      element.classList.remove("change");
    });
  })
});

