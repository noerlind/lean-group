$(document).ready(function(){
    $("#home-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause: true
    });

    var certSlider = $('#certificates-slider');
    certSlider.owlCarousel({
      items: 5,
      loop: true,
      margin: 28,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items:1,
          nav: false,
        },
        536: {
          items:2,
          nav: false,
          margin: 10,
        },
        768: {
          items:4,
          margin: 15,
          nav:false,
        },
        1200: {
          items:5
        },
      }
    });
    $('.custom-next').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    $('.custom-prev').click(function() {
        certSlider.trigger('prev.owl.carousel', [300]);
    })


    var prodSlider = $('.products-slider');
    prodSlider.owlCarousel({
      items: 5,
      loop: true,
      dots: false,
      margin: 28,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items:3
        },
        425: {
          items:3
        },
        768: {
          items:5
        },
      },
    });
    $('.products-next').click(function() {
      prodSlider.trigger('next.owl.carousel');
    })
    $('.products-prev').click(function() {
      prodSlider.trigger('prev.owl.carousel', [300]);
    })

    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
      $(this)
        .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
        .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
    });


    $('.burger-menu').click(function() {
      $('.burger-menu').toggleClass('burger-menu_active')
      $('.nav__list').toggleClass('nav__list_active')
    });
  });