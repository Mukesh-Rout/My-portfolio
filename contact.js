document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#contactForm");
  const button = document.querySelector("#button");

  if (form && button) {
      console.log("Button and form found in the DOM:", button, form);

      form.addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent default form submission

          const formData = {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              message: document.getElementById("message").value
          };

          // Send email using EmailJS
          emailjs.send("service_ukd9993", "template_7nqcb9el", formData)
              .then(response => {
                  console.log("Success:", response.status, response.text);
                  alert("Message sent successfully!");
                  form.reset();
              })
              .catch(error => {
                  console.error("Error:", error);
                  alert("Failed to send message. Please try again later.");
              });
      });
  } else {
      console.error("Button or form not found in the DOM.");
  }
});


