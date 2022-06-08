const menuToggle = document.querySelector('.menu-toggle')
const navBar = document.querySelector('.navbar-menu')
const navItems = document.querySelectorAll('.nav-link')

const toggleInput = document.querySelector('.toggle-services__input')
const iconsContainer = document.querySelectorAll('.services__icons')
const textContainer = document.querySelectorAll('.services__text')

const inputAbout = document.querySelectorAll('.about__input')
const aboutArticles = document.querySelectorAll('[data-length]')

const goTopButton = document.getElementById('top-btn')
const header = document.getElementById('header')

window.addEventListener('load', () => {
    if (window.location.href.includes('#success-text')) {
        const successAlert = document.getElementById('success-text')

        successAlert.style.display = 'block'

        setTimeout(() => {
            successAlert.style.display = 'none'
        }, 5000)
    }
})

// Open-close phone navbar
menuToggle.addEventListener('click', () => {
    openNavbar()
})

navItems.forEach(i => {
    i.addEventListener('focus', () => {
        openNavbar()
    })
    i.addEventListener('blur', () => {
        closeNavbar()
    })
});

document.addEventListener("click", (e) => {
    if (!['menu-toggle'].some(el => e.target.classList.contains(el))) {
        closeNavbar()
    }
})

function openNavbar() {
    navBar.classList.add('nav-open')
    menuToggle.classList.add('menu-toggle-open')
}

function closeNavbar() {
    navBar.classList.remove('nav-open')
    menuToggle.classList.remove('menu-toggle-open')
}

// Services manager: display icons
toggleInput.addEventListener('change', (e) => {
    if (e.target.checked) {
        iconsContainer.forEach(iCont => { iCont.hidden = false; });
        textContainer.forEach(tCont => { tCont.hidden = true; });
    } else {
        iconsContainer.forEach(iCont => { iCont.hidden = true; });
        textContainer.forEach(tCont => { tCont.hidden = false; });
    }

})

// About section checker
inputAbout.forEach(e => {
    e.addEventListener('click', (i) => {
        aboutArticles.forEach(article => {
            if (i.target.value === article.dataset.length) {
                // article.style.display = 'block'
                article.classList.add('reveal-about')
            } else {
                // article.style.display = 'none'
                article.classList.remove('reveal-about')
            }
        });
    })
});

// Contacts email validator
const email = document.getElementById('email')
const errorIcon = document.querySelector('.error-icon')
const errorText = document.querySelector('.error-text')

email.addEventListener('blur', (e) => {
    if (!(email.value.includes('@') && email.value.includes('.')) || email.value === '')
    {
        errorIcon.style.display = 'block'
        errorText.style.display = 'block'
    }
})

email.addEventListener('focus', () => {
    errorIcon.style.display = 'none'
    errorText.style.display = 'none'
})

// - - - - - - - - - - OBSERVER - - - - - - - - - -

const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
}

const headerObserver = new IntersectionObserver(function (entries, observer) {
    if (entries[0].isIntersecting === false)
    {
        goTopButton.classList.add('reveal')
    } else {
        goTopButton.classList.remove('reveal')
    }
}, options)

headerObserver.observe(header)