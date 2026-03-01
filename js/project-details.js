

function makeSectionNavVisible() {

    const nav = document.querySelector('#section-nav-div');
    const trigger = document.querySelector('#problem-section'); // show nav when this comes into view

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                nav.classList.remove('invisible');
            } 

        });
    }, {
        threshold: 0.5 // triggers when 50% of the element is visible
    });

    observer.observe(trigger);
}

function makeSectionNavInvisible() {

    const nav = document.querySelector('#section-nav-div');
    const trigger = document.querySelector('#project-link'); // show nav when this comes into view

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                nav.classList.add('invisible');
            } 

        });
    }, {
        threshold: 0.1 // triggers when 10% of the element is visible
    });

    observer.observe(trigger);
}

function jumpToSection(sectionID) {

    const sectionDiv = document.querySelector(sectionID);

    sectionDiv.scrollIntoView({
        behavior: 'smooth', // animated scroll
        block: 'center'      // align to top
    });    
}


document.addEventListener("DOMContentLoaded", () => {   

    makeSectionNavVisible();
    makeSectionNavInvisible();

    document.querySelector('#about-section-btn').addEventListener('click', (e) => {
        e.preventDefault();
        jumpToSection('#about-section');
    });    

    document.querySelector('#problem-section-btn').addEventListener('click', (e) => {
        e.preventDefault();
        jumpToSection('#problem-section');
    });     

    document.querySelector('#research-section-btn').addEventListener('click', (e) => {
        e.preventDefault();
        jumpToSection('#research-section');
    });   

    document.querySelector('#design-section-btn').addEventListener('click', (e) => {
        e.preventDefault();
        jumpToSection('#design-section');
    });   

    document.querySelector('#reflection-section-btn').addEventListener('click', (e) => {
        e.preventDefault();
        jumpToSection('#reflection-section');
    });   

})
