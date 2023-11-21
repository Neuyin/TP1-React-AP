document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí

    document.getElementById('estadoSelect').addEventListener('change', function () {
        // Obtener el valor seleccionado
        var estadoSeleccionado = document.getElementById('estadoSelect').value;

        // Actualizar el contenido del elemento span con el estado seleccionado
        document.getElementById('estadoSeleccionado').innerText = obtenerNombreEstado(estadoSeleccionado);
    });

    // Función para obtener el nombre del estado según el valor
    function obtenerNombreEstado(valor) {
        switch (valor) {
            case '1':
                return 'Pendiente';
            case '2':
                return 'En proceso';
            case '3':
                return 'Completado';
            default:
                return '';
        }
    }
});