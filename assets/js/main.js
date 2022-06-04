// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Header // 
// Open menu 
const primaryNav = document.querySelector(".primary-navbar");
const navToggle = document.querySelector(".menu-toggle-icon")

navToggle.addEventListener('click', () =>{
        const visibility = primaryNav.getAttribute('data-visible')
        const aria_expanded = navToggle.getAttribute('aria-expanded')

        // console.log(visibility);
        // console.log(aria_expanded);

        if (visibility === "false"){
            primaryNav.setAttribute('data-visible', true)
            navToggle.setAttribute('aria-expanded', true)
        } else if (visibility === "true"){
            primaryNav.setAttribute('data-visible', false)
            navToggle.setAttribute('aria-expanded', false)
        }
        // console.log(visibility);
        // console.log(aria_expanded);
}
);

// Open menu & search pop-up
// const menuToggleIcon = selectElement('#menu-toggle-icon');
// const formOpenBtn = selectElement('#search-icon');
// const formCloseBtn = selectElement('#form-close-btn');
// const searchContainer = selectElement('#search-form-container');

// const toggleMenu = () =>{
//     const mobileMenu = selectElement('#menu');
//     mobileMenu.classList.toggle('activated');
//     menuToggleIcon.classList.toggle('activated');
// }

// menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
// formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
// formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
// window.addEventListener('keyup', (event) => {
//     if(event.key === 'Escape') searchContainer.classList.remove('activated');
// });

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});



