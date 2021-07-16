$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
});
  $('.conditions-items').slick({
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
    responsive: [
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },
      ]
});
$('.home-img-items').slick({
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
    responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 1200,
            settings: {
              centerPadding: 0,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 730,
            settings: {
              centerPadding: 0,
              slidesToShow: 1,
            }
          },
      ]
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.footer__up').fadeIn();
    } else {
        $('.footer__up').fadeOut();
    }
    });
      
    $('.footer__up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
});
$(".mob-menu").click(function () {
    $(this).toggleClass("active");
    $(".navigations ul").toggleClass("active");
});