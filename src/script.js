 window.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('message');
    var maxCharacters = 200; // Maximum number of characters allowed

    messageInput.addEventListener('input', function() {
      var message = messageInput.value;
      if (message.length > maxCharacters) {
        messageInput.value = message.slice(0, maxCharacters);
      }
    });

    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
      var message = messageInput.value;
      if (message.length > maxCharacters) {
        event.preventDefault(); // Prevent form submission
        alert('Maximum character limit exceeded!');
      }
    });
  });
