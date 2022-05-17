const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.navbar-menu')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    menuToggle.classList.toggle('menu-toggle-open')
})