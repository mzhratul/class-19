$(function () {
   $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop()

      if (scrollSize < 200) {
         $('#backToTop').fadeOut(1000)
      } else {
         $('#backToTop').fadeIn(1000)
      }
   })

   $('#backToTop').on('click', function () {
      $('html,body').animate({
         scrollTop:0
      },5000)
   })

   //Animation Div

   $('#animate').on('click', function () {
      $('#animateDiv').animate({
         width: '500px',
         height: '400px',
         margin: '50px',
      }, '5000')
      $('#animateDiv').animate({
         opacity:'0.5'
      }, '2000')
   })
   $('#stop').on('click', function () {
      $('#animateDiv').stop()
   })

   $('p').css({
      'font-size': '50px',
      'letter-spacing':'5px'
   })
})