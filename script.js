
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.img_back');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });

  nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });

  // Automatically advance the carousel
  function autoAdvance() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  setInterval(autoAdvance, 3000); // Change images every 3 seconds

