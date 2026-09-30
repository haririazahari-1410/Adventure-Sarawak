// Regular Expression untuk pengesahan Format E-mel
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Menunggu dokumen sedia (DOM Loaded)
document.addEventListener("DOMContentLoaded", function () {

    // Dynamic Event Listener untuk Contact Form
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", validateContactForm);
    }

    // Dynamic Event Listener untuk Booking Form
    var bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", validateBookingForm);
    }
});

/* -----------------------------------------------------------
   A & B: VALIDATION CONTACT FORM (Modal + Ethical Consent)
----------------------------------------------------------- */
function validateContactForm(event) {
    event.preventDefault();

    var name = document.getElementById("contactName").value.trim();
    var email = document.getElementById("contactEmail").value.trim();
    var message = document.getElementById("contactMessage").value.trim();
    var consent = document.getElementById("contactConsent").checked;

    // Bersihkan paparan ralat terdahulu
    document.getElementById("contactNameError").innerText = "";
    document.getElementById("contactEmailError").innerText = "";
    document.getElementById("contactMessageError").innerText = "";
    document.getElementById("contactConsentError").innerText = "";

    var isValid = true;

    if (name === "") {
        document.getElementById("contactNameError").innerText = "Please enter your name.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("contactEmailError").innerText = "Please enter your email.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("contactEmailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("contactMessageError").innerText = "Please enter your message.";
        isValid = false;
    }

    if (!consent) {
        document.getElementById("contactConsentError").innerText = "You must check the consent box before submitting.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("contactSuccess").style.display = "block";
        document.getElementById("contactForm").reset();
    }

    return false;
}

/* -----------------------------------------------------------
   BOOKING FORM VALIDATION (Scenario Requirements)
----------------------------------------------------------- */
function validateBookingForm(event) {
    event.preventDefault();

    var name = document.getElementById("bookingName").value.trim();
    var phone = document.getElementById("bookingPhone").value.trim();
    var email = document.getElementById("bookingEmail").value.trim();
    var date = document.getElementById("travelDate").value;
    var participants = document.getElementById("participants").value;
    var tourPkg = document.getElementById("packageOption").value;
    var consent = document.getElementById("bookingConsent").checked;

    // Bersihkan paparan ralat terdahulu
    document.getElementById("bNameError").innerText = "";
    document.getElementById("bPhoneError").innerText = "";
    document.getElementById("bEmailError").innerText = "";
    document.getElementById("bDateError").innerText = "";
    document.getElementById("bPartError").innerText = "";
    document.getElementById("bPkgError").innerText = "";
    document.getElementById("bConsentError").innerText = "";

    var isValid = true;

    if (name === "") {
        document.getElementById("bNameError").innerText = "Full name is required.";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("bPhoneError").innerText = "Phone number is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("bEmailError").innerText = "Email address is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("bEmailError").innerText = "Invalid email format.";
        isValid = false;
    }

    if (date === "") {
        document.getElementById("bDateError").innerText = "Please select a travel date.";
        isValid = false;
    }

    if (participants === "" || participants < 1) {
        document.getElementById("bPartError").innerText = "Must have at least 1 participant.";
        isValid = false;
    }

    if (tourPkg === "") {
        document.getElementById("bPkgError").innerText = "Please select a tour package.";
        isValid = false;
    }

    if (!consent) {
        document.getElementById("bConsentError").innerText = "Consent is required to proceed with booking.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("bookingSuccess").style.display = "block";
        document.getElementById("bookingForm").reset();
    }

    return false;
}