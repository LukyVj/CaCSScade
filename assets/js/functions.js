$(document).ready(function(){
//function playSound(soundfile) {     document.getElementById("body").innerHTML=       "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";   }    function mario(){       var scene = $('body');       var mario = '<img src="assets/images/konami/marioRunRight.gif" id="mario">';       var audioElement = document.createElement('audio');         audioElement.setAttribute('src', 'assets/images/konami/mario-bros-theme-song-8-bit.mp3');         audioElement.setAttribute('autoplay', 'autoplay');        scene.prepend(mario);       //scene.remove();   }    function konami(){     //Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A     var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],     n = 0;     $(document).keydown(function (e) {     if (e.keyCode === k[n++]) {         if (n === k.length) {             console.log('Konami !!!'); // à remplacer par votre code             mario();             playSound();              return !1         }     } else k = 0     });   } /* \\ Konami ---------------------------------------------------------------------*/


  function sliderTestimonials(){

    var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    var slides = $('.slider ul li');
    var slideOne = $('.slider ul li:nth-child(1)');
    var slideTwo = $('.slider ul li:nth-child(2)');
    var slideThree = $('.slider ul li:nth-child(3)');

    $('.slider').css({
      width: slideWidth,
      height: slideHeight
    });

    $('.slider ul').css({
      width: sliderUlWidth,
      marginLeft: - slideWidth
    });

    slideOne.addClass('active').addClass('nth-child-1');
    slideTwo.addClass('nth-child-2');
    slideThree.addClass('nth-child-3');
      function moveRight() {
          $('.slider li:first-child').addClass('fadeOut');
          $('.slider ul').animate({
              left: - slideWidth
          }, 1000, function () {
              $('.slider ul li').removeClass('fadeOut').removeClass('active');
              $('.slider ul li:nth-child(2)').addClass('active');
              $('.slider ul li:first-child').appendTo('.slider ul');
              $('.slider ul').css('left', '');
              console.log('move right')

            function bulletPoints(){

              var bullet = $('.bullets .bullet');
              var b1 = $('.bullets .slide_1');
              var b2 = $('.bullets .slide_2');
              var b3 = $('.bullets .slide_3');

              if(slides.hasClass('fadeOut')){
                $('.bullet').removeClass('active');
              }

                if(slideOne.hasClass("active")){
                  b1.addClass('active');
                  bullet.not(b1).removeClass('active');
                }
              if(slideTwo.hasClass("active")){
                  b2.addClass('active');
                  bullet.not(b2).removeClass('active');
                }
              if(slideThree.hasClass("active")){
                  b3.addClass('active');
                  bullet.not(b3).removeClass('active');
              }
            }
            bulletPoints();
          });
      };
      function moveLeft() {
          $('.slider li:first-child').addClass('fadeOut');
          $('.slider ul').animate({
              right: - slideWidth
          }, 1000, function () {
              $('.slider ul li').removeClass('fadeOut').removeClass('active');
              $('.slider ul li:nth-child(2)').addClass('active');
              $('.slider ul li:first-child').appendTo('.slider ul');
              $('.slider ul').css('right', '');
              console.log('move left')

            function bulletPoints(){

              var bullet = $('.bullets .bullet');
              var b1 = $('.bullets .slide_1');
              var b2 = $('.bullets .slide_2');
              var b3 = $('.bullets .slide_3');

              if(slides.hasClass('fadeOut')){
                $('.bullet').removeClass('active');
              }

                if(slideOne.hasClass("active")){
                  b1.addClass('active');
                  bullet.not(b1).removeClass('active');
                }
              if(slideTwo.hasClass("active")){
                  b2.addClass('active');
                  bullet.not(b2).removeClass('active');
                }
              if(slideThree.hasClass("active")){
                  b3.addClass('active');
                  bullet.not(b3).removeClass('active');
              }
            }
            bulletPoints();
          });
      };

    setInterval(function () {
      moveLeft();
    }, 8500);


    // Bullet clicks
    // Fix it
    function bulletClick(){
      var bullet = $('.bullets .bullet');
      var b1 = $('.bullets .slide_1');
      var b2 = $('.bullets .slide_2');
      var b3 = $('.bullets .slide_3');

      var slides = $('.slider ul li');
      var slideOne = $('.slider ul li:nth-child(1)');
      var slideTwo = $('.slider ul li:nth-child(2)');
      var slideThree = $('.slider ul li:nth-child(3)');

      bullet.on('click', function(){
        var $this = $(this);
        var $class = $this.attr('class');
        var $class = $class.replace('bullet', '');
        var $class = $class.replace('slide_','');

        var $selectedSlide = $('.slider ul li:nth-child('+ $class +')');


      });
    }
    bulletClick();
  }//\ Slider testimonials

  // FLip blocks
  function randomFlip(){
    var $blocks = $('.left-side .flipper,.right-side .flipper');
    var random = 1 + Math.floor(Math.random() * 20);

    $('div:nth-child('+ random +')').addClass('flip-it');

    setInterval(function() {
      var random = 1 + Math.floor(Math.random() * 20);
      $blocks.removeClass('flip-it');
      $('.left-side .flipper:nth-child('+ random +'), .right-side .flipper:nth-child('+ random +') ').addClass('flip-it');
    }, 6500);

  }

  // Anchor down
  function slideDownHomepage(){
    var trigger = $('.jumbotron a.btn-cta');
    var winHeight = $('body').height();
    var scene = $('html,body');
    trigger.on('click', function(e){
      e.preventDefault();
       $('html,body').animate({
          scrollTop: winHeight + 'px'
        }, 1000);
    });
  }


  // Animation homepage
  // Faire tourner 3 marques differentes
  function rollBrands(){

    //Rollup function
    function rollUp(){
       var scene = $('.showcase');


      setInterval(function(){
        scene.attr('data-scene','2')
      }, 3000);

      setInterval(function(){
        scene.attr('data-scene','3')
      }, 6000);

      setInterval(function(){
        scene.attr('data-scene','1')
      }, 9000);



      if(scene.data('scene') == "1"){
          $('.block.left').attr('data-service','mailchimp');
          $('.block.right').attr('data-service','dropbox');
       }

     if(scene.data('scene') == "2"){
          $('.block.left').attr('data-service','github');
          $('.block.right').attr('data-service','xero');
       }

      else if(scene.data('scene') == "3"){
          $('.block.left').attr('data-service','recurly');
          $('.block.right').attr('data-service','quickbooks');
       }

    }

    setInterval(function(){
      rollUp();
    }, 3000);
  }

  // Deploy
  function deploy(){
    rollBrands();
    slideDownHomepage();
    randomFlip();
    sliderTestimonials();
  }



  deploy();

});
