const dots = document.querySelector('.dots');
const navEls = document.querySelector('.els');
const navElsLi = document.querySelectorAll('.els li');
const nav = document.querySelector('header nav');
const logo = document.querySelector('header nav .logo');
const langs = document.querySelector('header nav .langs');

// open navbae

function openNav() {
  if (getComputedStyle(navEls).display === 'none') {
    navEls.style.display = 'block';
    nav.style.height = '100vh';
    dots.style.top = '57px';
    logo.style.height = '100px';
    langs.style.top = '57px';
    for (const iterator of navElsLi) {
      iterator.style.display = "block"
      iterator.style.margin = "10px 0"
    }
  } else {
    navEls.style.display = 'none';
    nav.style.height = '12%';
    dots.style.top = '50%';
    logo.style.height = 'calc(100% + 20px)100px';
    langs.style.top = '50%';
    for (const iterator of navElsLi) {
      iterator.style.display = "inline-block"
    }
  }
}

dots.addEventListener('click', openNav);


// Properties slider

