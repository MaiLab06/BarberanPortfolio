$(document).ready(function () {
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // Fade-in on scroll using Intersection Observer-like logic
  let $sections = $('section');

  function revealOnScroll() {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    $sections.each(function () {
      let offsetTop = $(this).offset().top;

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

    //Hambuger Menu
   $(document).ready(function () {
    $("#menu-toggle").click(function () {
      $("#nav-links").toggleClass("active");
    });
  });
