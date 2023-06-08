//For page 1 image slider.

document.addEventListener('DOMContentLoaded', function() {
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var prevButton = document.querySelector('.prev-button');
    var nextButton = document.querySelector('.next-button');
    var slideWidth = document.querySelector('.slider img').clientWidth;
    var currentPosition = 0;
    var totalSlides = document.querySelectorAll('.slider img').length;
    var maxPosition = -(totalSlides - 1) * slideWidth;
  
    function slideNext() {
      if (currentPosition > maxPosition) {
        currentPosition -= slideWidth;
        sliderWrapper.style.transform = 'translateX(' + currentPosition + 'px)';
      } else {
        currentPosition = 0;
        sliderWrapper.style.transform = 'translateX(' + currentPosition + 'px)';
      }
    }
  
    function slidePrev() {
      if (currentPosition < 0) {
        currentPosition += slideWidth;
        sliderWrapper.style.transform = 'translateX(' + currentPosition + 'px)';
      } else {
        currentPosition = maxPosition;
        sliderWrapper.style.transform = 'translateX(' + currentPosition + 'px)';
      }
    }
  
    prevButton.addEventListener('click', slidePrev);
    nextButton.addEventListener('click', slideNext);
  });
  