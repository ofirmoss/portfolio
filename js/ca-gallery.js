var gProjs = [{
    "id": "sokoban game",
    "name": "Sokoban game",
    "title": "Better push those boxes",
    "link": "https://ofirmoss.github.io/sokoban-game/index.html",
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],
  },
  {
    "id": "minesweeper game",
    "name": "minesweeper",
    "title": "Better push those boxes",
    "link": '',
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],

  },
  {
    "id": "mister-bloger",
    "name": "mister-bloger",
    "title": "Better push those boxes",
    "link": 'https://ofirmoss.github.io/mister-bloger/index.html',
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],

  },
  {
    "id": "guess-me",
    "name": "guess-me",
    "title": "Better push those boxes",
    "link": 'https://ofirmoss.github.io/guess-me/index.html',
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],

  },
  {
    "id": "book-shop",
    "name": "book-shop",
    "title": "Better push those boxes",
    "link": "https://ofirmoss.github.io/book-shop/index.html",
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],

  },
  {
    "id": "touch-nums",
    "name": "touch-nums",
    "title": "Better push those boxes",
    "link": '',
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],

  }
];

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

function initPage() {
  var newProj = '<div class="row">';
  var newModal = '';

  for (var i = 0; i < gProjs.length; i++) {
    newProj +=
      '<div class="col-md-4 col-sm-6 portfolio-item">' +
      '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal' + (i + 1) + '">' +
      '<div class="portfolio-hover">' +
      '<div class="portfolio-hover-content">' +
      '<i class="fa fa-plus fa-3x"></i>' +
      '</div>' +
      '</div>' +
      '<img class="img-fluid border1" src="img/portfolio/' + gProjs[i].id + '.jpg" alt="">' +
      '</a>' +
      '<div class="portfolio-caption border2">' +
      '<h4>' + gProjs[i].name + '</h4>' +
      '<p class="text-muted">Click for details</p>' +
      '</div>' +
      '</div>'

      newModal+= 
      '<div class="portfolio-modal modal fade" id="portfolioModal'+(i+1)+'" tabindex="-1" role="dialog" aria-hidden="true">'+
      '<div class="modal-dialog">'+
        '<div class="modal-content backgroundColor2">'+
          '<div class="close-modal" data-dismiss="modal">'+
            '<div class="lr">'+
              '<div class="rl"></div>'+
            '</div>'+
          '</div>'+
          '<div class="container">'+
            '<div class="row backgroundColor">'+
              '<div class="col-lg-8 mx-auto">'+
                '<div class="modal-body">'+
                  '<!-- Project Details Go Here -->'+
                  '<h2>'+gProjs[i].id+'</h2>'+
                  '<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>'+
                  '<img class="img-fluid d-block mx-auto" src="img/portfolio/' + gProjs[i].id + '.jpg" alt="">'+
                  '<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis'+
                    'dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,'+
                    'maiores repudiandae, nostrum, reiciendis facere nemo!</p>'+
                  '<ul class="list-inline">'+
                    '<li>Date: January 2017</li>'+
                    '<li>Client: Threads</li>'+
                    '<li>Category: Illustration</li>'+
                    '<li> <a href="'+gProjs[i].link+'">Link</a></li>'+
                  '</ul>'+
                  '<button class="btn btn-primary" data-dismiss="modal" type="button">'+
                      '<i class="fa fa-times"></i>'+
                      'Close Project</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
  }
  newProj += '</div>';

  document.querySelector('#insertPortfolios').innerHTML = newProj;
  document.querySelector('.modals').innerHTML = newModal;
}

function contectMeSubmit() {
  var eMail = document.querySelector('#InputEmail');
  var subject = document.querySelector('#InputSubject');
  var MassageBody = document.querySelector('#InputMassageBody');
  
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ofirmoss@gmail.com&su='+subject.value+'&b ody=-massage from: '+eMail.value+'%0a'+MassageBody.value);
}