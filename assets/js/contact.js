
    
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('DugNYkwLCM6JKsd7x');
        })();
    
   
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_LC', 'template_x52yd1h', this)
                    .then(function() {
                        alert('THE MESSAGE HAS BEEN SENT');
                    }, function(error) {
                        alert('FAILED...', error);
                    });
            });
        }
    