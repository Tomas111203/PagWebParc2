// Versión alternativa en js/index.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-bs-target');
            const modal = document.querySelector(modalId);
            const iframe = modal.querySelector('iframe');
            
            // Al cerrar el modal
            modal.addEventListener('hidden.bs.modal', () => {
                iframe.src = iframe.src; // Recarga el iframe (detiene el video)
            });
        });
    });
});