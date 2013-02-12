var images = [
  'img/kitten_1.jpg',
  'img/kitten_2.jpg',
  'img/kitten_3.jpg',
  'img/kitten_4.jpg',
  'img/kitten_5.jpg'
];

var currentIndex = 0;

var next = function() {
  currentIndex = (currentIndex + 1) % images.length;
}

var prev = function() {
  currentIndex = (currentIndex - 1) % images.length;
}

var setImage = function() {
  $('#main').css({'background-image': 'url(' + images[currentIndex] + ')' });
}

$(document).ready(function() {
  setImage();

  $('#next').click( function() {
    next();
    setImage();
  });

  $('#prev').click( function() {
    prev();
    setImage();
  });

});
