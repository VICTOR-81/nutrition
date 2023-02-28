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




const consultation = document.querySelectorAll('.consultation__btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const modalClose = document.querySelector('.modal__close');

consultation.forEach(consultBtn => {
  consultBtn.addEventListener('click', openModal => {
    modal.classList.toggle("modal__hide");
    header.style.position = 'static';
    document.body.style.overflow = 'hidden';
    overlay.classList.toggle('overlay_open');
  })
});

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (overlay === target || target.closest('.modal__close')) {
  modal.classList.toggle("modal__hide");
  document.body.style.overflow = '';
  header.style.position = 'fixed';
  overlay.classList.toggle('overlay_open');
  console.log(target);
  }
});