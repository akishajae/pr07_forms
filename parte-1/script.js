// API VALIDATION
let ageInput = document.getElementById("ageInput");
ageInput.addEventListener("input", function () {
    if (this.value < 18) {
        this.setCustomValidity("Debes ser mayor de edad.");
    } else {
        this.setCustomValidity("");
    }
});

// FORM VALIDATION
let lengthLetterInput = document.getElementById("lengthLetterInput");
lengthLetterInput.addEventListener("input", function() {
    if (this.value.length >= 3 && this.value.length <= 5) {
        this.setCustomValidity("Debe tener al menos 3 lettras y máximo 5.");
    } else {
        this.setCustomValidity("");
    }
    this.reportValidity();
});
