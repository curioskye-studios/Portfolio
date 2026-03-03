
function toggleElementOnScroll(elementID, triggerID) {

    const element = document.querySelector(elementID);
    const trigger = document.querySelector(triggerID);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                element.classList.remove('invisible');
            } else {

                // Only hide if trigger is below the viewport (not yet scrolled to)
                if (entry.boundingClientRect.top > 0) {
                    element.classList.add('invisible');
                }
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(trigger);
}

function jumpToSection(sectionID) {

    const sectionDiv = document.querySelector(sectionID);

    sectionDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });    
}

document.addEventListener("DOMContentLoaded", () => {   

    toggleElementOnScroll('#section-nav-div', '#problem-section');
});

const navButtonIDs = [
    "#about-section",
    "#problem-section",
    "#research-section",
    "#design-section",
    "#reflection-section"
]

function setNavButtonListeners() {
    navButtonIDs.forEach(navButtonID => {
        $(navButtonID + "-btn").on("click", (e) => {
            e.preventDefault();
            jumpToSection(navButtonID);
        });    
    });
}

$(function() {    

    $("#section-nav-div").load("/global/ux-navigator.html", function() {

        setNavButtonListeners();
    });

    $("#top-jumper-div").load("/global/top-jumper.html", function() {
        
        toggleElementOnScroll('#top-jumper-div', '#problem-section');
    });

});