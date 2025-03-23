document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    
    actionButton.addEventListener('click', function() {
      // Navigate to page2.html when the button is clicked
      window.location.href = 'page2.html';
    });
  });
  