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


const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = [
    "curious", "responsible", "innovative", "ice-cream eater",  "collaborative", "passionate", "polite", "resourceful", "adaptable",
    "game", "git wizard", "bug buster", "pixel Picasso", "design-patterns Alchemist", "active", "just happy", "supercool to work with :)", "druid",
    "wow! Thanks for staying on my site so long! Let me know if you've reached this line and want me to be your"];

let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
      cursor.classList.remove('blink');
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      cursor.classList.add('blink');
      setTimeout(erase, 1200);
    }
  }

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
  })

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
    navBar.classList.toggle('nav-open')
    menuToggle.classList.toggle('menu-toggle-open')
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
