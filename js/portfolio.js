// Config - all project data in one place
const projects = {
    ux: [
        { id: "ux-lumonote", link: "projects/ux-design/previews/lumonote-preview.html", col: "project-col-1" },
        { id: "ux-quickwash", link: "projects/ux-design/previews/quickwash-preview.html", col: "project-col-2" }
    ],
    dev: [
        { id: "dev-lumonote", link: "projects/software-dev/previews/lumonote-preview.html", col: "project-col-1" }
    ]
};

function renderProjects(type) {

    const columnHTMLData = 
        projects[type].map(project => `
            <div class="${project.col} col-lg-6 d-flex flex-column">
                <div id="${project.id}" class="mb-1" data-aos="fade-up" data-aos-duration="1200"></div>
            </div>
        `).join('');

    $('.project-display').html(`<div class="row gx-4 mt-4">${columnHTMLData}</div>`);
}

function loadProjects(projectList) {
    
    projectList.forEach(project => {
        $.ajax({
            url: project.link,
            type: 'GET',
            success: function(data) {
                $(`#${project.id}`).html(data);
            },
            error: function() {
                console.error(`Failed to load ${project.link}`);
            }
        });
    });
}

function setActiveFilter(activeBtn, inactiveBtn) {

    $(activeBtn).addClass('project-filter-active').removeClass('project-filter');
    $(inactiveBtn).addClass('project-filter').removeClass('project-filter-active');
}

function resetAOSFunction() {

    setTimeout(() => {
        if (typeof AOS !== "undefined") {
            AOS.refreshHard();   // important
        }
    }, 200);
}

function resetScrollPosition(scrollPosition) {

    // delay scroll a tiny bit to let the DOM render
    setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'auto' });
    }, 50); 
}

function switchFilter(type, activeBtn, inactiveBtn) {

    const scrollPosition = window.scrollY;

    setActiveFilter(activeBtn, inactiveBtn);
    renderProjects(type);
    loadProjects(projects[type]);
    resetAOSFunction();

    resetScrollPosition(scrollPosition)
}

// Init
$(function() {

    // default load
    loadProjects(projects.ux);

    $('#ux-filter-btn').on('click', function(e) {
        e.preventDefault();
        switchFilter('ux', '#ux-filter-btn', '#dev-filter-btn');
    });

    $('#dev-filter-btn').on('click', function(e) {
        e.preventDefault();
        switchFilter('dev', '#dev-filter-btn', '#ux-filter-btn');
    });

});