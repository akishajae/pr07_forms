// API VALIDATION

function validateAge() {
    let ageInput = document.getElementById("ageInput");
    if (ageInput.value < 18) {
        ageInput.setCustomValidity("Debes ser mayor de edad.");
    } else {
        ageInput.setCustomValidity("");
        showAlert("Edad correcta.", "success");
    }
    ageInput.reportValidity();
}

function validateDate() {
    let dateInput = document.getElementById("dateInput");
    let regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateInput.value)) {
        dateInput.setCustomValidity("Formato incorrecto, debe usar DD-MM-AAAA.");
    } else {
        dateInput.setCustomValidity("");
        showAlert("Formato correcto.", "success");
    }
    dateInput.reportValidity();
}


// FORM VALIDATION
// let lengthLetterInput = document.getElementById("lengthLetterInput");
// lengthLetterInput.addEventListener("input", function () {
//     if (this.value.length >= 3 && this.value.length <= 5) {
//         this.setCustomValidity("Debe tener al menos 3 lettras y máximo 5.");
//     } else {
//         this.setCustomValidity("");

//     }
//     this.reportValidity();
// });

document.getElementById("texto").addEventListener("input", function () {
    if (!/^[A-Za-z]{3,5}$/.test(this.value)) {
        this.setCustomValidity("Debe contener entre 3 y 5 letras");
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    } else {
        this.setCustomValidity("");
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        showAlert("Texto correcto.", "success");
    }
    this.reportValidity();
});

document.getElementById("email").addEventListener("input", function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
        this.setCustomValidity("Ingrese un email válido");
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
        showAlert("Ingrese un email válido", "error");
    } else {
        this.setCustomValidity("");
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        showAlert("Email correcto", "success");
    }
    this.reportValidity();
});

document.querySelectorAll("input[name='chk']").forEach(chk => {
    chk.addEventListener("change", function () {
        let checkboxes = document.querySelectorAll("input[name='chk']:checked").length;
        showAlert(`Has seleccionado ${checkboxes} opciones`, checkboxes === 2 ? "success" : "error");
    });
});

document.getElementById("multi").addEventListener("change", function () {
    let opcionesSeleccionadas = Array.from(this.options).filter(option => option.selected).length;
    this.style.backgroundColor = opcionesSeleccionadas === 2 ? "#d4edda" : "#f8d7da";
    showAlert(`Has seleccionado ${opcionesSeleccionadas} opciones`, opcionesSeleccionadas === 2 ? "success" : "error");
});

function validarFormulario() {
    let texto = document.getElementById("texto");
    let email = document.getElementById("email");
    let checkboxes = document.querySelectorAll("input[name='chk']:checked").length;
    let select = document.getElementById("multi");
    let opcionesSeleccionadas = Array.from(select.options).filter(option => option.selected).length;

    if (!texto.checkValidity() || !email.checkValidity() || checkboxes !== 2 || opcionesSeleccionadas !== 2) {
        showAlert("Por favor, corrige los errores antes de enviar", "error");
        return;
    }

    showAlert("Formulario enviado correctamente", "success");
}

// ALERT
function showAlert(message, type) {
    let alertBox = document.getElementById("alertBox");
    alertBox.innerText = message;
    alertBox.className = `alert-custom ${type === 'success' ? 'alert-success' : 'alert-error'}`;
    alertBox.style.display = "block";
    setTimeout(() => { alertBox.style.display = "none"; }, 3000);
}
