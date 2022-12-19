// json data start
const slides = [
  {
    title: 'Oferta saptamanii',
    description:
      ' Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    buttonText: 'Detalii',
    buttonLink: './detalii',
    background: {
      backgroundImage: '../img/Layer1.png',
      backgroundColor: '#444444',
    },
  },

  {
    title: 'Oferta saptamanii',
    description: ' Cuis ticidunt urna purs, sed convallis nisl mollis',
    buttonText: 'Detalii',
    buttonLink: './detalii',
    background: {
      backgroundImage: '../img/Layer1.png',
      backgroundColor: '#444444',
    },
  },
];
// json data end

// submenu start
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
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
};
// submenu end

// slider content start
$(document).ready(function () {
  slides.forEach((slide) => {
    $('.owl-carousel').append(
      `
    <div class="item container ">
    <div class="carousel-text">
      <h1 class="title">${slide.title}</h1>
      <p class="description"> ${slide.description}</p>
      <a href=${slide.buttonLink} class="btn details"><i class="icon-star-filled"></i>${slide.buttonText}</a>
      </div>

    <ul class="social-media">
    <li>
      <a
        href="http://google.com"
        target="_blank"
        rel="noopener noreferrer"
      ><i class="icon-facebook"></i></a>
    </li>

    <li>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      ><i class="icon-youtube"></i></a>
    </li>

    <li>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      ><i class="icon-twitter"></i></a>
    </li>

    <li>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      ><i class="icon-gplus"></i></a>
    </li>
   </ul>
    </div>

    `,
    );

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
      document.getElementById(
        'owl-carousel',
      ).style.backgroundImage = `url(${slide.background.backgroundImage})`;
    } else {
      document.getElementById(
        'owl-carousel',
      ).style.backgroundColor = `url(${slide.background.backgroundColor})`;
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
    autoplayHoverPause: true,
  });
});

// slider content end

// alert btn
$('#btn').click(function (event) {
  event.preventDefault(alert('This is an alert message!'));
});
