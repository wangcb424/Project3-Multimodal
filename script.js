document.addEventListener('DOMContentLoaded', function() {
  // Navigation button on index.html to switch to page2.html
  const actionButton = document.getElementById('actionButton');
  if (actionButton) {
    actionButton.addEventListener('click', function() {
      window.location.href = 'page2.html';
    });
  }
  
  // Back button on page2.html to return to index.html
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  const homeButton = document.getElementById('homeButton');
  if (homeButton) {
    homeButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      window.location.href = 'page3.html';
    });
  }
  
  // Automatic slideshow for the left image on both pages
  const leftImages = [
    "FirstImage.jfif",
    "SecondImage.jfif",
    "ThirdImage.jfif"
  ];
  let leftIndex = 0;
  const leftImageElement = document.querySelector('.left-image img');
  if (leftImageElement) {
    setInterval(function() {
      leftIndex = (leftIndex + 1) % leftImages.length;
      leftImageElement.src = leftImages[leftIndex];
    }, 3000); // Change image every 3 seconds
  }
  
  // Automatic slideshow for the right image on both pages
  const rightImages = [
    "FourthImage.jfif",
    "FifthImage.jfif",
    "SixthImage.jfif"
  ];
  let rightIndex = 0;
  const rightImageElement = document.querySelector('.right-image img');
  if (rightImageElement) {
    setInterval(function() {
      rightIndex = (rightIndex + 1) % rightImages.length;
      rightImageElement.src = rightImages[rightIndex];
    }, 4500); // Change image every 3 seconds
  }
});
