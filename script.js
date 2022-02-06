const hamburgerMenu = document.querySelector('.menu-toggle');
const navMobile = document.querySelector('#navMobile');

hamburgerMenu.addEventListener('click', function() {
  navMobile.classList.toggle('slide');
})