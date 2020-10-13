const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function validateForm() {
    event.preventDefault();
    if (checkLength(lastName.value)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value) {
    if (value.trim().length > 4) {
        return true;
    } else {
        return false;
    }
}