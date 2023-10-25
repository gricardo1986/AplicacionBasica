
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    // Abre el modal al cargar la página
    $('#register').modal('show');
});

// Registra los eventos del modal
$('#register').on('show.bs.modal', function () {
    console.log('El modal está comenzando a abrirse.');
});

$('#register').on('shown.bs.modal', function () {
    console.log('El modal se ha abierto completamente.');
});

$('#register').on('hide.bs.modal', function () {
    console.log('El modal está comenzando a ocultarse.');
});

$('#register').on('hidden.bs.modal', function () {
    console.log('El modal se ha ocultado completamente.');
});


$('#asesor').on('show.bs.modal', function () {
    // Inhabilita el botón y cambia su color
    $('.btnAbrirModal').prop('disabled', true);
    $('.btnAbrirModal').removeClass('btn-success').addClass('btn-warning');
});
$('#asesor').on('hide.bs.modal', function () {
    // Inhabilita el botón y cambia su color
    $('.btnAbrirModal').prop('disabled', false);
    $('.btnAbrirModal').removeClass('btn-warning').addClass('btn-success');
});