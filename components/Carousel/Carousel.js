/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  // Creating all the elements
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  // Adding classes to the elements
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  // Appending all the elements 
  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  // Adding image sources
  img1.src = images[i];
  img2.src = images[i];
  img3.src = images[i];
  img4.src = images[i];

  // Temporary fix
  img1.style.display = 'inline-block';
  // img2.style.display = 'inline-block';
  // img3.style.display = 'inline-block';
  // img4.style.display = 'inline-block';

  // Adding textContent
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  return carousel;
}

// Creating a current index of images
let images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];

let i = 0;

// Document variables
let carouselContainer = document.querySelector('.carousel-container');

// Appending Carousel
carouselContainer.appendChild(Carousel(images));

// Adding EventListeners
document.querySelector('.left-button').addEventListener('click', showImage);
document.querySelector('.right-button').addEventListener('click', showImage);

// Functions to move through the index of images
function plusImage(n) {
  showImage(imageIndex += n);
}

function currentImage(n) {
  showImage(imageIndex = n);
}

function showImage(n) {
  let i;
  if (n > images.length) {
    imageIndex = 1
  } 
  if (n < 1) {
    imageIndex = images.length
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none"; 
  }
  images[imageIndex-1].style.display = "inline-block"; 
}