$(document).ready(function(){
  $('.Item-Box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplaySpeed:2000,
    Infinity:true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/Left Arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/Right Arrow.png'>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,

          arrows:true
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,

          arrows:false
        }
      },
      
    ]
   
  });
}); 

// scoll smooth

document.addEventListener('touchstart', onTouchStart, {passive: true});