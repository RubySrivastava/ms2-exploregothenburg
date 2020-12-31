function sendMail(contactForm) {
    emailjs.send("service_18rrpsf", "ruby", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    contactForm.reset(); // To clear the page
    return false;  // To block from loading a new page   
}