// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

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