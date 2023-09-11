$(function(){


  /* header */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header').addClass('active')
    }
    else {
      $('header').removeClass('active')
    }
  });

  /* trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })

  /* app-slider */
  $('.app-slider').slick({
    infinite: true,
    arrows: false, 
    dots: true,
    autoplay: true, 
    autoplaySpeed: 2000, 
  })

  /* faq */
  $('.faq-title').click(function(){
    $(this).parent().siblings().children('.faq-desc').slideUp()
    $(this).next().stop().slideToggle(300)
    $(this).parent().toggleClass('active')
    $(this).parent().siblings().removeClass('active')
  })


  /* AOS */
  AOS.init();
})