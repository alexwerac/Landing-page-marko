
function burgerMenu () {
    
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav'); 
  const navItem = document.querySelectorAll('.nav__item');
  const navLink = document.querySelectorAll('.nav__link');

    menuBtn.addEventListener("click", () => {
    if (!menuBtn.classList.contains('active')){
      menuBtn.classList.add('active');
      nav.classList.add('menu');
      nav.classList.add('active');
    
      for(let navElem of navItem){
        navElem.classList.add('active');
      }
  
      for(let childElem of navLink){
        childElem.classList.toggle('active');
      }
    } else {
      menuBtn.classList.remove('active');
      nav.classList.remove('menu');
      nav.classList.remove('active');
    
      for(let navElem of navItem){
        navElem.classList.remove('active');
      }
  
      for(let childElem of navLink){
        childElem.classList.remove('active');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      menuBtn.classList.remove('active');
      nav.classList.remove('menu');
      nav.classList.remove('active');
    
      for(let navElem of navItem){
        navElem.classList.remove('active');
      }
  
      for(let childElem of navLink){
        childElem.classList.remove('active');
      }
    }
  });
}

burgerMenu();

function burgerMenuHide() {

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav'); 
  const navItem = document.querySelectorAll('.nav__item');
  const navLink = document.querySelectorAll('.nav__link');

  const anchor1 = document.getElementById('anchor1');
  const anchor2 = document.getElementById('anchor2');
  const anchor3 = document.getElementById('anchor3');
  const anchor4 = document.getElementById('anchor4');
  const anchor5 = document.getElementById('anchor5');
  const anchor6 = document.getElementById('anchor6');
  const anchor7 = document.getElementById('anchor7');

  function anchorFunc(anchor){
  anchor.addEventListener("click", () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('menu');
    nav.classList.remove('active');

    for(let navElem of navItem){
      navElem.classList.remove('active');
    }

    for(let childElem of navLink){
      childElem.classList.remove('active');
    }
  });
  }
  anchorFunc(anchor1);
  anchorFunc(anchor2);
  anchorFunc(anchor3);
  anchorFunc(anchor4);
  anchorFunc(anchor5);
  anchorFunc(anchor6);
  anchorFunc(anchor7);
}

burgerMenuHide();

function fixedHeader() {

  const header = document.querySelector('.header');
  const intro = document.querySelector('.intro');

  window.addEventListener('scroll', () => {
    introH = intro.clientHeight;
    scrollT = window.pageYOffset;

    if (scrollT > introH){
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

  });
}

fixedHeader();

function activeDot(){
  const about__anchor1 = document.getElementById('about__anchor1');
  const about__anchor2 = document.getElementById('about__anchor2');
  const about__anchor3 = document.getElementById('about__anchor3');
  const about__anchor4 = document.getElementById('about__anchor4');

  const dot__anchor1 = document.getElementById('dot__anchor1');
  const dot__anchor2 = document.getElementById('dot__anchor2');
  const dot__anchor3 = document.getElementById('dot__anchor3');
  const dot__anchor4 = document.getElementById('dot__anchor4');

  function anchorAboutFunc(about__anchor, dot__anchor){
    about__anchor.addEventListener('mouseover', () => {
      dot__anchor.style.backgroundColor = "#fff";
    });

    about__anchor.addEventListener('mouseout', () => {
      dot__anchor.style.backgroundColor = "#1d1e1f";
    });
  }

  anchorAboutFunc(about__anchor1, dot__anchor1);
  anchorAboutFunc(about__anchor2, dot__anchor2);
  anchorAboutFunc(about__anchor3, dot__anchor3);
  anchorAboutFunc(about__anchor4, dot__anchor4);
}

activeDot();

function scrollButton() {
  const scrollup = document.querySelector('.scrollup')

  window.addEventListener('scroll', () => {
    scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      scrollup.classList.add('active');
    } else {
      scrollup.classList.remove('active');
    }
  });

  scrollup.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

scrollButton()

let slider = $("#reviewsSlider")

slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
});


