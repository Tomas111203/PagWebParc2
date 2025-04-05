document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('apiQuiz');
    
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let score = 0;
            const totalQuestions = 5;
            
            // Verificar cada pregunta
            for(let i = 1; i <= totalQuestions; i++) {
                const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
                if(selectedOption && selectedOption.value === "correct") {
                    score++;
                }
            }
            
            // Mostrar resultados con estilo acorde a tu tema
            const resultMessage = `Obtuviste ${score} de ${totalQuestions} respuestas correctas (${Math.round(score/totalQuestions*100)}%)`;
            
            // Crear un modal de Bootstrap para mostrar los resultados
            const modalHTML = `
                <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true" style="color: #000;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #bb86ff;">
                                <h5 class="modal-title" id="resultModalLabel">Resultado del Cuestionario</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="background-color: #1e1e1e; color: #fff;">
                                ${resultMessage}
                            </div>
                            <div class="modal-footer" style="background-color: #1e1e1e;">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Insertar el modal en el DOM
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            
            // Mostrar el modal
            const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
            resultModal.show();
            
            // Eliminar el modal después de cerrarlo
            document.getElementById('resultModal').addEventListener('hidden.bs.modal', function() {
                this.remove();
            });
        });
    } else {
        console.log('El formulario del cuestionario no fue encontrado');
    }
});