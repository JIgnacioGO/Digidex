$(document).ready(function() {
    // Agregar evento click al enlace "Acerca de"
    $('.nav-link[href="#"]').click(function(e) {
        e.preventDefault();
        // Mostrar el modal
        $('#myModal').modal('show');
    });
});