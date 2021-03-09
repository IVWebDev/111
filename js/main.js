// gallery slider
const prevBtn = document.getElementById('btn-prev2'),
   nextBtn = document.getElementById('btn-next2'),
   slides = document.querySelectorAll('.image-item');

let index = 0;

function activeSlide(n) {
   for (slide of slides) {
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
};


function nextSlide() {
   if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
   } else {
      index++;
      activeSlide(index);
   }
};

function prevSlide() {
   if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
   } else {
      index--;
      activeSlide(index);
   }
};

// setInterval(nextSlide, 2000);


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
