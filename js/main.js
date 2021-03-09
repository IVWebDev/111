// about slider
const prevBtn1 = document.getElementById('btn-prev1'),
   nextBtn1 = document.getElementById('btn-next1'),
   slides1 = document.querySelectorAll('.slider-item');

let index = 0;

function activeSlide1(n) {
   for (slide of slides1) {
      slide.classList.remove('active');
   }
   slides1[n].classList.add('active');
};


function nextSlide1() {
   if (index == slides1.length - 1) {
      index = 0;
      activeSlide1(index);
   } else {
      index++;
      activeSlide1(index);
   }
};

function prevSlide1() {
   if (index == 0) {
      index = slides1.length - 1;
      activeSlide1(index);
   } else {
      index--;
      activeSlide1(index);
   }
};

// Автопереключение
setInterval(nextSlide1, 2000);


nextBtn1.addEventListener('click', nextSlide1);
prevBtn1.addEventListener('click', prevSlide1);


// gallery slider
const prevBtn2 = document.getElementById('btn-prev2'),
   nextBtn2 = document.getElementById('btn-next2'),
   slides2 = document.querySelectorAll('.image-item');

let index2 = 0;

function activeSlide2(n) {
   for (slide of slides2) {
      slide.classList.remove('active');
   }
   slides2[n].classList.add('active');
};


function nextSlide2() {
   if (index2 == slides2.length - 1) {
      index2 = 0;
      activeSlide2(index2);
   } else {
      index2++;
      activeSlide2(index2);
   }
};

function prevSlide2() {
   if (index2 == 0) {
      index2 = slides2.length - 1;
      activeSlide2(index2);
   } else {
      index2--;
      activeSlide2(index2);
   }
};

// setInterval(nextSlide, 2000);


nextBtn2.addEventListener('click', nextSlide2);
prevBtn2.addEventListener('click', prevSlide2);
