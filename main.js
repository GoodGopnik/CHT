$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
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
});
$('.home-img-items').slick({
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        },
      ]
});