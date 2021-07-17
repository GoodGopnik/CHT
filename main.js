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
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: "<div class='prev-arrow'>",
    nextArrow: "<div class='next-arrow'>",
    responsive: [
        {
          breakpoint: 1602,
          settings: {
            slidesToShow: 3,
          }
        },
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
$('#example').buzinaPagination({
  itemsOnPage: 10,
  prevnext: true,
  prevText: "←",
  nextText: "→" 
});
$('#sale-pag').buzinaPagination({
  itemsOnPage: 4,
  prevnext: true,
  prevText: "←",
  nextText: "→" 
});
$('#rent-pag').buzinaPagination({
  itemsOnPage: 4,
  prevnext: true,
  prevText: "←",
  nextText: "→" 
});
$(".rent-btn").click(function () {
  $(this).addClass("active");
  $(".sale__items-rent").css({'display' : 'block'});
  $(".sale__items-sale").css({'display' : 'none'});
  $(".sale-btn").removeClass("active");
});
$(".sale-btn").click(function () {
  $(this).addClass("active");
  $(".sale__items-rent").css({'display' : 'none'});
  $(".sale__items-sale").css({'display' : 'block'});
  $(".rent-btn").removeClass("active");
});


// var teamN = 1;
// 			$(".team-one").each(function () {
// 				var imgURL = $(this).find('.t-img').attr('src');
// 				var name = $(this).find('.name').html();
// 				var position = $(this).find('.position').html();
// 				if (1 == teamN) {
// 					$(this).parent().find('.team-one:last').find('.team-popup-next .p-img').attr('src', imgURL);
// 					$(this).parent().find('.team-one:last').find('.team-popup-next .p-name').html(name);
// 					$(this).parent().find('.team-one:last').find('.team-popup-next .p-position').html(position);
// 				} else {
// 					$(this).prev().find('.team-popup-next .p-img').attr('src', imgURL);
// 					$(this).prev().find('.team-popup-next .p-name').html(name);
// 					$(this).prev().find('.team-popup-next .p-position').html(position);
// 				}
// 				teamN++;
// 			});