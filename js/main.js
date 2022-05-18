const menuToggle = document.querySelector('.menu-toggle')
const navBar = document.querySelector('.navbar-menu')

const twInputs = document.querySelectorAll('.tri-way-toggle__input')
const twArr = [...twInputs]

// Open-close phone navbar
menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('nav-open')
    menuToggle.classList.toggle('menu-toggle-open')
})

// Three way toggle manager
twInputs.forEach(e => {
    e.addEventListener('click', () => {
        e.parentElement.style.color = 'var(--col-primary)'

        twArr
            .filter((item) => { return item != e })
            .forEach((item) => { item.parentElement.style.color = 'var(--col-lightest)' })
    })
})
