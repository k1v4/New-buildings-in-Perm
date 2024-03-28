$(document).ready(function () {
  $('.slider-feedback').slick({
    slidesPerRow: 3,
    rows: 2,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: false,
    infinity: false,
    varibleWidth: true,
  });
});
$('#left-arrow').on('click', function () {
  $('.slider-feedback').slick('slickPrev');
});
$('#right-arrow').on('click', function () {
  $('.slider-feedback').slick('slickNext');
});

const photos = [
  'images/slider1_photo1.png',
  'images/slider1_photo2.png',
  'images/slider1_photo3.png',
];

const descriptions = [
  '1-комн. квартира, 37 м, 10 этаж',
  '2-комн. квартира, 62 м, 4 этаж',
  '1-комн. квартира, 40 м, 5 этаж',
];

const adresses = [
  'ул. Газеты Звезда, 42',
  'ул. Сибирская, 28',
  'ул. Мира, 102',
];

const prices = ['5 200 000 ₽', '7 800 000 ₽', '4 900 000 ₽'];

const len = photos.length;
let currentPhotoIndex1 = 0;
let currentPhotoIndex2 = 1;
let currentPhotoIndex3 = 2;

let photo1, photo2, photo3;

document.addEventListener('DOMContentLoaded', function () {
  check_addres();

  const imageElementLeft = document.getElementById('left-arrow');
  const imageElementRight = document.getElementById('right-arrow');

  let test = document.querySelectorAll('.elem-slider');

  photo1 = test[0];
  photo2 = test[1];
  photo3 = test[2];

  imageElementLeft.onclick = function () {
    currentPhotoIndex1 = currentPhotoIndex2;
    currentPhotoIndex2 = currentPhotoIndex3;
    currentPhotoIndex3++;

    if (currentPhotoIndex3 > len - 1) {
      currentPhotoIndex3 = 0;
    }

    photo1.children[0].src = photos[currentPhotoIndex1];
    photo1.children[1].innerHTML = descriptions[currentPhotoIndex1];
    photo1.children[2].innerHTML = adresses[currentPhotoIndex1];
    photo1.children[3].innerHTML = prices[currentPhotoIndex1];

    photo2.children[0].src = photos[currentPhotoIndex2];
    photo2.children[1].innerHTML = descriptions[currentPhotoIndex2];
    photo2.children[2].innerHTML = adresses[currentPhotoIndex2];
    photo2.children[3].innerHTML = prices[currentPhotoIndex2];

    photo3.children[0].src = photos[currentPhotoIndex3];
    photo3.children[1].innerHTML = descriptions[currentPhotoIndex3];
    photo3.children[2].innerHTML = adresses[currentPhotoIndex3];
    photo3.children[3].innerHTML = prices[currentPhotoIndex3];

    check_addres();
  };

  imageElementRight.onclick = function () {
    currentPhotoIndex3 = currentPhotoIndex2;
    currentPhotoIndex2 = currentPhotoIndex1;
    currentPhotoIndex1--;

    if (currentPhotoIndex1 < 0) {
      currentPhotoIndex1 = len - 1;
    }

    photo1.children[0].src = photos[currentPhotoIndex1];
    photo1.children[1].innerHTML = descriptions[currentPhotoIndex1];
    photo1.children[2].innerHTML = adresses[currentPhotoIndex1];
    photo1.children[3].innerHTML = prices[currentPhotoIndex1];

    photo2.children[0].src = photos[currentPhotoIndex2];
    photo2.children[1].innerHTML = descriptions[currentPhotoIndex2];
    photo2.children[2].innerHTML = adresses[currentPhotoIndex2];
    photo2.children[3].innerHTML = prices[currentPhotoIndex2];

    photo3.children[0].src = photos[currentPhotoIndex3];
    photo3.children[1].innerHTML = descriptions[currentPhotoIndex3];
    photo3.children[2].innerHTML = adresses[currentPhotoIndex3];
    photo3.children[3].innerHTML = prices[currentPhotoIndex3];

    check_addres();
  };

  function open_build() {
    window.location.href = 'building_card.html';
  }

  function check_addres() {
    var sliders = document.getElementsByClassName('elem-slider');
    for (var i = 0; i < sliders.length; i++) {
      if (sliders[i].children[2].innerHTML == 'ул. Мира, 102') {
        sliders[i].setAttribute('style', 'cursor: pointer;');
        sliders[i].addEventListener('click', open_build, false);
      } else {
        sliders[i].setAttribute('style', 'default: pointer;');
        sliders[i].removeEventListener('click', open_build, false);
      }
    }
  }
});
