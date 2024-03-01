const photos = [
  'images/slider1_photo1.png',
  'images/slider1_photo2.png',
  'images/slider1_photo3.png',
];
const len = photos.length;
let currentPhotoIndex1 = 0;
let currentPhotoIndex2 = 1;
let currentPhotoIndex3 = 2;

document.addEventListener('DOMContentLoaded', function () {
  const imageElementLeft = document.getElementById('left-arrow');
  const imageElementRight = document.getElementById('right-arrow');

  imageElementLeft.onclick = function () {
    currentPhotoIndex1++;
    currentPhotoIndex2++;
    currentPhotoIndex3++;

    if (currentPhotoIndex3 > len - 1) {
      currentPhotoIndex3 = 0;
    }

    alert(
      currentPhotoIndex1 + ' ' + currentPhotoIndex2 + ' ' + currentPhotoIndex3
    );
  };

  imageElementRight.onclick = function () {
    currentPhotoIndex1--;
    currentPhotoIndex2--;
    currentPhotoIndex3--;

    if (currentPhotoIndex3 < 0) {
      currentPhotoIndex3 = len - 1;
    }

    alert(
      currentPhotoIndex1 + ' ' + currentPhotoIndex2 + ' ' + currentPhotoIndex3
    );
  };
});
