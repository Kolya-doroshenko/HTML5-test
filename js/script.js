//Slider
$(document).ready(function () {
    $(".slider").slick({
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      rows: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            rows: 0,
          },
        },
      ],
    });
  });

//Menu burger
const iconMenu = document.querySelector('.lines__button');
if(iconMenu){
  const bodyMenu = document.querySelector('.header__nav');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    bodyMenu.classList.toggle('_active');
  });
  const itemsMenu = document.querySelectorAll('.header__nav__items');
  // console.log(itemsMenu)
  itemsMenu.forEach((item) => {
    item.addEventListener("click", function(e){
      bodyMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
    })
  })
}
$(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
    $('.header').css('background','black');
    } else {
    $('.header').css('background','transparent');
    }
    });
