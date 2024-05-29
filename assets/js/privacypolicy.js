 // JavaScript to show and hide the pop-up and overlay
  document.getElementById('privacyLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('privacyPopup').style.display = 'block'; // Show the pop-up
    document.getElementById('overlay').style.display = 'block'; // Show the overlay
    document.body.style.overflow = 'hidden'; // Disable scrolling on the background
  });

  // Close the pop-up and overlay when clicking outside the pop-up
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('privacyPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  });
