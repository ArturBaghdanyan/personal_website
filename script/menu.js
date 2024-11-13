function showSideBar() {
    const nav = document.getElementById("header-nav");
    nav.style.display = 'flex';
    nav.style.transition = 'right 2s';
    nav.classList.add('open');
  }
  
function hideSidebar() {
    const nav = document.getElementById("header-nav");
    nav.style.transition = 'right 2s'; 
    nav.classList.remove('open');
}
  
const hideMobileMenu = document.querySelectorAll('.hide-sidebar')
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', showSideBar);

hideMobileMenu.forEach(item => {
    item.addEventListener('click', hideSidebar);
});