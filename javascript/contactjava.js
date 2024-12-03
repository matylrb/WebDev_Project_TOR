document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const query = document.getElementById("query").value.trim();

    // Get error message element and phone field
    const errorPhone = document.getElementById("phone_error");
    const phoneField = document.getElementById("phone");

    // Define patterns for validation
    const phonePattern = /^[0-9\s\-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    let isValid = true; // Validation flag

    // Validate phone number
    if (!phone || !phonePattern.test(phone)) {
        errorPhone.classList.remove("hidden");
        phoneField.setAttribute("aria-invalid", "true");
        isValid = false;
    } else {
        errorPhone.classList.add("hidden");
        phoneField.removeAttribute("aria-invalid");
    }

    // Validate name
    if (name === "") {
        alert("Please enter your name.");
        isValid = false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }
    
    if (!emailField.value || !emailField.validity.valid) {
        emailError.classList.remove('hidden');
        emailField.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else {
        emailError.classList.add('hidden');
        emailField.removeAttribute('aria-invalid');
      }

    // Validate query
    if (query === "") {
        alert("Please enter your query.");
        isValid = false;
    }

    // If all fields are valid, simulate form submission
    if (isValid) {
        console.log("Form Submitted:", { name, phone, email, query });
        alert("Your query has been delivered!");
    }
});
