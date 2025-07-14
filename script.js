$(document).ready(function () {
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // Fade-in on scroll using Intersection Observer-like logic
  const $sections = $('section');

  function revealOnScroll() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    $sections.each(function () {
      const offsetTop = $(this).offset().top;

      if (scrollTop + windowHeight > offsetTop + 100) {
        $(this).addClass('visible');
      }
    });
  }

  $sections.addClass('hidden');
  revealOnScroll(); // run on load
  $(window).on('scroll', revealOnScroll);
});

  $(window).on("load", function () {
    // Wait for the progress animation to finish
    setTimeout(function () {
      $("#loader").fadeOut(600);
    }, 2200); // match or slightly exceed animation duration
  });
