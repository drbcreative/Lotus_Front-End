/* Nav Location and Re-Location */
const navBar = document.querySelector('.navbar-wrapper'),
  headerContainer = document.querySelector('#header-container'),
  mobileHeader = document.querySelector('#mobile-header');

/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    desktopNav();
  }
});

window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 992) {
    desktopNav();
  } else if (winWidth < 992) {
    mobileNav();
  }
});

/* Functions */
const desktopNav = () => {
  headerContainer.appendChild(navBar);
}
const mobileNav = () => {
  mobileHeader.appendChild(navBar);
}

/* Animation */
const mindWrapper = document.querySelector('.mind'),
  mindBox = mindWrapper.querySelector('.section-info'),
  productWrapper = document.querySelector('.product-wrapper'),
  productBox = productWrapper.querySelectorAll('.product-box'),
  winHeight = window.innerHeight;

window.addEventListener('scroll', () => {

  if (mindWrapper.getBoundingClientRect().top < winHeight / 6) {
    mindBox.classList.add('show');
  } else {
    mindBox.classList.remove('show');
  }


  if (productWrapper.getBoundingClientRect().top < winHeight / 3) {
    productBox.forEach((staff, i) => {
      setTimeout(() => {
        staff.classList.add("show");
      }, i * 350);
    });
  } else {
    productBox.forEach((staff, i) => {
      setTimeout(() => {
        staff.classList.remove("show");
      }, i * 350);
    });
  }
});