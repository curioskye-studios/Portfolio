(function ($) {
  "use strict";


  

  window.addEventListener("load", () => {
    // Slide preloader up
    $(".preloader").addClass("loaded");

    // Wait for animation to finish before removing it
    setTimeout(() => {
      $(".preloader").remove();
      AOS.refresh(); // Refresh AOS after preloader disappears
    }, 600); // Match CSS transition duration
  });

  $(document).ready(function () {

    // Isotope Initialization
    var $container = $('.isotope-container');
    if ($container.length) {
      $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
      });
    }

    // Chocolat Lightbox Init
    if ($('.image-link').length) {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      });
    }

    // Animate On Scroll (AOS) Init
    AOS.init({
      duration: 5000,
      once: true,
    });

    // Swiper Slider Init
    if ($('.testimonial-swiper').length) {
      new Swiper('.testimonial-swiper', {
        // slidesPerView: 2,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    }

    // Filter Buttons Active State & Filtering
    $('.filter-button').click(function () {
      $('.filter-button').removeClass('active');
      $(this).addClass('active');

      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue === '*' ? '*' : filterValue });

      // Reinitialize AOS after filtering
      AOS.refresh();
    });

  });

})(jQuery);