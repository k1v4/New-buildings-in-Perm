const photos = [
  'images/building-info-slider1.png',
  'images/building-info-slider2.png',
  'images/building-info-slider3.png',
];

const len = photos.length;
let currentPhotoIndex1 = 0;
let currentPhotoIndex2 = 1;
let currentPhotoIndex3 = 2;

document.addEventListener('DOMContentLoaded', function () {
  const imageElementLeft = document.getElementById('left-arrow');
  const imageElementRight = document.getElementById('right-arrow');

  let test = document.querySelectorAll('.elem-slider');

  imageElementLeft.onclick = function () {
    currentPhotoIndex1 = currentPhotoIndex2;
    currentPhotoIndex2 = currentPhotoIndex3;
    currentPhotoIndex3++;

    if (currentPhotoIndex3 > len - 1) {
      currentPhotoIndex3 = 0;
    }

    test[0].children[0].src = photos[currentPhotoIndex1];
    test[1].children[0].src = photos[currentPhotoIndex2];
    test[2].children[0].src = photos[currentPhotoIndex3];
  };

  imageElementRight.onclick = function () {
    currentPhotoIndex3 = currentPhotoIndex2;
    currentPhotoIndex2 = currentPhotoIndex1;
    currentPhotoIndex1--;

    if (currentPhotoIndex1 < 0) {
      currentPhotoIndex1 = len - 1;
    }

    test[0].children[0].src = photos[currentPhotoIndex1];
    test[1].children[0].src = photos[currentPhotoIndex2];
    test[2].children[0].src = photos[currentPhotoIndex3];
  };
});
