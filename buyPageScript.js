document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.getElementsByClassName('list-item');

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener(
      'click',
      function () {
        window.location.href = 'building_card.html';
      },
      false
    );
  }
});
