(function($) {
  "use strict"; // Start of use strict
  $('#video').on('shown.bs.modal', function() {
    $("#player iframe").attr('src', 'https://www.youtube.com/embed/Rr8ljRgcJNM?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video').on('hidden.bs.modal', function() {
    $("#player iframe").attr('src', 'https://www.youtube.com/embed/Rr8ljRgcJNM?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

  $('#video__course').on('shown.bs.modal', function() {
    $("#player iframe").attr('src', 'https://www.youtube.com/embed/Rr8ljRgcJNM?ecver=1&autoplay=1&showinfo=0&mute=0&iv_load_policy=3&showsearch=0');
  })
  $('#video__course').on('hidden.bs.modal', function() {
    $("#player iframe").attr('src', 'https://www.youtube.com/embed/Rr8ljRgcJNM?ecver=1&autoplay=0&showinfo=0&mute=1&iv_load_policy=3&showsearch=0');
  })

    $('.service__info').mouseover(function() {
      $(this).find('.service__bg').addClass('service__bg--shown');
    });
    $('.service__info').mouseout(function() {
      $(this).find('.service__bg').removeClass('service__bg--shown');
    }); 
  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

$(document).ready(function(){


   if( $( window ).width() <= 760 ) {

    $(".navbar").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+335}, 1500);
    });

    $(".intro__btn-group").on("click","a.button", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+335}, 1500);
    });

  };
  if( $( window ).width() > 760 ) {

    $(".navbar").on("click",".nav__link", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()}, 1500);
    });

    $(".intro__btn-group").on("click","a.button", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+55}, 1500);
    });

  };
});

// Modal scroll
$(function() {
  var $btn = $('.button__scroll');

  $btn.on('click', function(e) {
    var $this = $(this),
        $modal = $this.closest('.modal'),
        $modalHead = $modal.find('.modal__head'),
        href = $this.data('href'),
        $target = $modal.find(href);

        $modal.stop().animate({
            scrollTop: $target.offset().top - $modalHead.offset().top + 30
        }, 1500);

    e.preventDefault();
  });
});

// Validation
$(function() {
  $('.contactForm--modal').on('submit', function(e) {
    var $form = $(this),
        $email = $form.find('[name=email]'),
        $phone = $form.find('[name=phone]'),
        $animateElement = $form.find('.modal__group'),
        animateElementReplace = $form.find('.contactForm--success');

    if ($email.val() === '' &&  $phone.val() === '') {
      alert('Please enter either your phone or your email');
      return false; /* cancel submit */
    }

    $animateElement.animate({
                    left: '-100%',
                    opacity: '0'
                  }, 
                  { 
                    duration: 1200, 
                    queue: false, 
                    complete: function(){
                      $(this).remove();
                    }
                  })
                  .animateElementReplace.animate({
                    left: '0',
                    opacity: '1'
                  }, 
                  { 
                    duration: 1200, 
                    queue: false,
                    start: function(){
                      $(this).show();
                    }
                  });

    e.preventDefault();
  });
});

$(function() {
  var windowHeight = $(window).outerHeight(),
      documentHeight = $('.intro').innerHeight(),
      $intro = $('.intro__bg'),
      opacityVal = 0.1;
      $intro.css({opacity: opacityVal});

  $(window).on('scroll', function() {
    var windowTop = $(window).scrollTop();
    opacityVal = 0.1 * (1 - (windowTop / documentHeight));
    $intro.css({opacity: opacityVal});
  });
});
 
$(function() {

  $('.modal__height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

  if( $( window ).width() >= 760 ) {

    $('.event__head').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

    $('.course--height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });

  }

});

if( ($( window ).width() >= 760) && ($( window ).width() < 960) ) {
  $(document).ready( function() {
    var numberCatalog = $('.event__col');
    if (numberCatalog.length % 2 === 1) {
      $('.event__col').slice(-1).addClass('col-sm-offset-3 col-md-offset-0');
    }
  });
}

$(function() {
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('navbar-toggle--open');
  });
});

$('.coworking__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '280px',
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
  responsive: [
  {
    breakpoint: 1600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      centerPadding: '150px'
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      centerPadding: '100px'
    }
  },
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: false,
      centerPadding: '0'
    }
  }
  ]
});

$('.comment__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '280px',
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
  responsive: [
  {
    breakpoint: 1600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      centerPadding: '150px'
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      centerPadding: '100px'
    }
  },
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      infinite: false,
      centerPadding: '0'
    }
  }
  ]
});


$(function() {
  if( $( window ).width() >= 960 ) {

    $('.partner__btn').mouseover(function() {
      $('.partner__col--prehidden').addClass('partner__col--opacity');
    });
    $('.partner__btn').mouseout(function() {
      $('.partner__col').removeClass('partner__col--opacity');
    });       
    $('.partner__btn').click(function() {
      $('.partner__col').removeClass('partner__col--opacity');
    });  


    $(document).ready(function(){
      $('.partner__btn').click( function () {
        $('.partner__btn').toggleClass('partner__btn--opened');
        $('.partner__col').slice(4,8).toggleClass("partner__col--prehidden");
        $('.partner__col').slice(8,30).toggleClass("partner__col--hidden");
      });
    }); 

    $(document).ready(function(){
      $('.partner__btn.partner__btn--opened').click( function () {
        $('.partner__col').slice(4,8).toggleClass("partner__col--prehidden");
        $('.partner__col').slice(8,30).toggleClass("partner__col--hidden");
      });
    });

  }


  if( $( window ).width() < 960 ) {

    $('.partner__btn').mouseover(function() {
      $('.partner__col').slice(2,30).addClass('partner__col--opacity');
    });
    $('.partner__btn').mouseout(function() {
      $('.partner__col').removeClass('partner__col--opacity');
    });       
    $('.partner__btn').click(function() {
      $('.partner__col').removeClass('partner__col--opacity');
      $('.partner__col-xs').slice(2,4).toggleClass('partner__col-xs--shown');
    });  


    $(document).ready(function(){
      $('.partner__btn').click( function () {
        $('.partner__btn').toggleClass('partner__btn--opened');
        $('.partner__col').slice(4,8).toggleClass("partner__col--prehidden");
        $('.partner__col').slice(8,30).toggleClass("partner__col--hidden");
      });
    }); 

    $(document).ready(function(){
      $('.partner__btn.partner__btn--opened').click( function () {
        $('.partner__col').slice(4,8).toggleClass("partner__col--prehidden");
        $('.partner__col').slice(8,30).toggleClass("partner__col--hidden");
      });
    });

  }

});




})(jQuery); // End of use strict


/*var player, iframe;
var $ = document.querySelector.bind(document);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'Rr8ljRgcJNM',
    events: {
      'onReady': onPlayerReady
    },   
    playerVars: {
      'autoplay' : 1,
      'rel' : 0,
      'showsearch' : 0,
      'loop' : 1,
      'enablejsapi' : 1,
      'controls': 0,
      'iv_load_policy': 3,
      'showinfo': 0,
      'playlist': 'Rr8ljRgcJNM',
      'playsinline': 1
    }
  });
}

function onPlayerReady(event) {
  var player = event.target;
  iframe = $('#player');
  setupListener(); 
  player.playVideo();
  player.setVolume(0);
}

function setupListener (){
$('#purpose__play').addEventListener('click', playFullscreen);
}

function playFullscreen (){
  player.playVideo();//won't work on mobile
  player.setVolume(100);
  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
  if (requestFullScreen) {
    requestFullScreen.bind(iframe)();
  }
}*/