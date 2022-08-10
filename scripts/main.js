// flickity

jQuery(function($) {

$('.banner-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: true,
});

$('.elem-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots:false,
  wrapAround: true,
});

$('.elem-carousel-nav').flickity({
  asNavFor: '.elem-carousel',
  contain: true,
  pageDots: false,
  arrows: false,
});

Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove('flickity-resize');
  resize.call( this );
  this.element.classList.add('flickity-resize');
};

// lightbox
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// masonry

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 0,
  percentPosition: true,
});

    var windowWidth = $('body').width();

    /*
    |----------------------------------------------------------------
    | Hide/Show Header
    |----------------------------------------------------------------
    */
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
          return;
        }

        // If they scrolled down and are past the navbar, add class .header-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('header-up').addClass('header-down');
            }
        }
        lastScrollTop = st;
    }

    setInterval(function() {
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);


//Scroll Lock
const targeElement = document.querySelector('.gn');

//Mobile Navigation
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  if ($('.text').hasClass('fade')) {
    $('.text').removeClass('fade');
    $('.star').removeClass('rotate');
    $('.gn').slideUp();
    bodyScrollLock.enableBodyScroll(targeElement);
  } else {
    $('.star').addClass('rotate');
    $('.text').addClass('fade');
    $('.gn').slideDown();
    bodyScrollLock.disableBodyScroll(targeElement);
  }
});

$('.menu-item').on('click', function(e) {
  e.preventDefault();
  if ($('.text').hasClass('fade')) {
    $('.text').removeClass('fade');
    $('.star').removeClass('rotate');
    $('.gn').slideUp();
    bodyScrollLock.enableBodyScroll(targeElement);
  } 
});

//responsive close nav

$(window).resize(function() {
  windowWidth = $('body').width();
  if(windowWidth > 992 && $('.text').hasClass('fade')){
    $('.text').removeClass('fade');
    $('.star').removeClass('rotate');
    $('.gn').slideUp();
    bodyScrollLock.enableBodyScroll(targeElement);
  }
})

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//window resize
$( window ).resize(function() {
  $('.elem-carousel').flickity('resize')
});



});