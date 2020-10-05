var message = document.querySelector('.message');
    message.style.display = 'none';

    // buttons
    var cformSendBtn = document.getElementById("cform-send-btn");
    
    var cformClose = document.getElementById('cform-close');
    
    var cformSend = document.getElementById('cform-send');

    function closeMessage() {
      message.style.display = 'none';
    }

    cformClose.addEventListener('click', closeMessage);

    cformSendBtn.addEventListener('click', function() {
      message.style.display = 'block';
    });

    function sendEmail() {
      var name = document.getElementById('cform-name')
      var email = 'marian.razvan.oprisan@gmail.com';
      var subject = 'Solution Needed (' + document.getElementById('cform-email').value + ")";

      var message = 'Dear Marian,%0A';
      message += document.getElementById('cform-message').value + '%0A';

      message += '%0A%0ARegards, %0A';
      message += document.getElementById('cform-name').value;

      message = message.replace(/[\r\n]/g, "%0A");

      // console.log(message);

      document.location = "mailto:" + email + "?subject=" + subject + "&body=" + message;

    }

    cformSend.addEventListener('click', sendEmail);