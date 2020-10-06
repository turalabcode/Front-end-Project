$( document ).ready(function() {
    $(".owl-one").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });

      $(".my-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

      $(".featured-properties-2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
})
