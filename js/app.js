/* Menu Background */
const navBar = document.querySelector('.nav-wrapper'),
  siteLogo = document.querySelector('.nav-logo'),
  bsNavbar = document.querySelector('.navbar');

// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 992 && window.scrollY > 50) {
//     headerMain.classList.remove('show');
//   }
// });

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navBar.classList.add('show');
    siteLogo.classList.add('show');
    bsNavbar.classList.add('show');
  } else if (window.innerWidth >= 1200 && window.scrollY > 30) {
    bsNavbar.classList.add('show');
  } else {
    navBar.classList.remove('show');
    siteLogo.classList.remove('show');
    bsNavbar.classList.remove('show');
  }
});