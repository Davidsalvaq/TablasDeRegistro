const btnAgregar = document.getElementById('btnRegistrar');
const tablaEstudiantes = document.getElementById('tablaEstudiantes');

let contador = 1;

btnAgregar.addEventListener('click', function () {

    let nombre = document.getElementById('nombre').value;
    let cuenta = document.getElementById('cuenta').value;
    let carrera = document.getElementById('carrera').value;
    
    if (nombre == '' || cuenta == '' || carrera == '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    let fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${contador}</td>
        <td>${nombre}</td>
        <td>${cuenta}</td>
        <td>${carrera}</td>
    `;

    tablaEstudiantes.appendChild(fila);
    contador++;

    document.getElementById('nombre').value = '';
    document.getElementById('cuenta').value = '';
    document.getElementById('carrera').value = '';
});
document.getElementById('nombre').value = '';
document.getElementById('cuenta').value = '';
document.getElementById('carrera').value = '';

