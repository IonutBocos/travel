"use strict";

// json data start
var slides = [{
  title: 'Oferta saptamanii',
  description: ' Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  buttonText: 'Detalii',
  buttonLink: './detalii',
  background: {
    backgroundImage: '../img/Layer1.png',
    backgroundColor: '#444444'
  }
}, {
  title: 'Oferta saptamanii',
  description: ' Cuis ticidunt urna purs, sed convallis nisl mollis',
  buttonText: 'Detalii',
  buttonLink: './detalii',
  background: {
    backgroundImage: '../img/Layer1.png',
    backgroundColor: '#444444'
  }
}]; // json data end
// submenu start

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
} // Close the dropdown menu if the user clicks outside of it


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}; // submenu end
// slider content start


$(document).ready(function () {
  slides.forEach(function (slide) {
    $('.owl-carousel').append("\n    <div class=\"item container \">\n    <div class=\"carousel-text\">\n      <h1 class=\"title\">".concat(slide.title, "</h1>\n      <p class=\"description\"> ").concat(slide.description, "</p>\n      <a href=").concat(slide.buttonLink, " class=\"btn details\"><i class=\"icon-star-filled\"></i>").concat(slide.buttonText, "</a>\n      </div>\n\n    <ul class=\"social-media\">\n    <li>\n      <a\n        href=\"http://google.com\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      ><i class=\"icon-facebook\"></i></a>\n    </li>\n\n    <li>\n      <a\n        href=\"http://\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      ><i class=\"icon-youtube\"></i></a>\n    </li>\n\n    <li>\n      <a\n        href=\"http://\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      ><i class=\"icon-twitter\"></i></a>\n    </li>\n\n    <li>\n      <a\n        href=\"http://\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      ><i class=\"icon-gplus\"></i></a>\n    </li>\n   </ul>\n    </div>\n\n    "));

    if (slide.title === undefined) {
      $('.title').remove();
    }

    if (slide.description === undefined) {
      $('.description').remove();
    }

    if (slide.buttonLink === undefined) {
      $('.details').remove();
    }

    if (slide.background.backgroundImage !== undefined) {
      document.getElementById('owl-carousel').style.backgroundImage = "url(".concat(slide.background.backgroundImage, ")");
    } else {
      document.getElementById('owl-carousel').style.backgroundColor = "url(".concat(slide.background.backgroundColor, ")");
    }
  });
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true
  });
}); // slider content end
// alert btn

$('#btn').click(function (event) {
  event.preventDefault(alert('This is an alert message!'));
});