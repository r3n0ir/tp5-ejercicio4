/* 
4- Crear una web con un reloj que muestre la siguiente información: (ver imagen en el documento del campus)
*/

document.addEventListener('DOMContentLoaded', function () {
    function updateDateTime() {
        const fecha = document.querySelector('.jumbotron h2');
        const tiempo = document.querySelector('.container h3');

        const actual = new Date();

        const detallesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaActual = actual.toLocaleDateString('es-ES', detallesFecha);

        const detallesTiempo = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const tiempoActual = actual.toLocaleTimeString('es-ES', detallesTiempo);
        fecha.textContent = fechaActual;
        tiempo.textContent = tiempoActual;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
});