document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Siempre previene el comportamiento predeterminado

        // Verifica si el formulario es válido.
        if (!contactForm.checkValidity()) {
            event.stopPropagation(); // Detiene la propagación si el formulario no es válido
        } else {
            // El formulario es válido, procede a enviarlo via AJAX
            var formData = new FormData(contactForm); // Usa contactForm directamente aquí

            fetch('phpmailer.php', { // Asume que tu script PHP está en 'phpmailer.php'
                method: 'POST',
                body: formData,
            })
            .then(response => response.json()) // Espera una respuesta en formato JSON
            .then(data => {
                if(data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Email sent!',
                        text: 'Thank you for contacting us.'
                    });
                    resetFormFields()      
                } else {
                    console.log('Correo no enviado', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        
        // Agrega la clase 'was-validated' para mostrar los mensajes de validación, hacerlo fuera del else
        contactForm.classList.add('was-validated');
    });

    let formFields = contactForm.querySelectorAll('input, textarea');

    formFields.forEach(function(field) {
        field.addEventListener('input', function() {
            // Elimina la clase 'was-validated' cuando el usuario modifica un campo
            contactForm.classList.remove('was-validated');
        });
    });
    function resetFormFields() {
        let formFields = contactForm.querySelectorAll('input, textarea');
    
        // Limpia los campos del formulario excepto el botón de envío
        formFields.forEach(field => {
            // Verifica si el campo no es un botón de envío antes de limpiarlo
            if (field.type !== 'submit') {
                field.value = '';
            }
        });
        // Opcional: Limpia los mensajes de validación
        contactForm.classList.remove('was-validated');
    }
    
});
