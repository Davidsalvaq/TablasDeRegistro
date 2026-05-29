const btnRegistrar = document.getElementById('btnRegistrar');
const tablaEstudiantes = document.getElementById('tablaEstudiantes');

let contador = 1;
let filaEditando = null; // Almacena la fila que se está modificando

btnRegistrar.addEventListener('click', function () {
    let nombre = document.getElementById('nombre').value.trim();
    let cuenta = document.getElementById('cuenta').value.trim();
    let carrera = document.getElementById('carrera').value.trim();
    
    if (nombre == '' || cuenta == '' || carrera == '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (filaEditando !== null) {
        // MODO EDICIÓN: Actualiza las celdas de la fila seleccionada
        filaEditando.cells[1].textContent = nombre;
        filaEditando.cells[2].textContent = cuenta;
        filaEditando.cells[3].textContent = carrera;
        
        // Restablecer interfaz
        btnRegistrar.textContent = 'Registrar';
        filaEditando = null;
    } else {
        // MODO AGREGAR: Crea una nueva fila
        let fila = document.createElement('tr');
        
        fila.innerHTML = `
            <td>${contador}</td>
            <td>${nombre}</td>
            <td>${cuenta}</td>
            <td>${carrera}</td>
            <td>
                <button class="btn-editar" style="margin: 0 5px; padding: 2px 10px;">Editar</button>
                <button class="btn-eliminar" style="margin: 0 5px; padding: 2px 10px;">Eliminar</button>
            </td>
        `;

        // Asignar eventos directamente a los botones creados
        fila.querySelector('.btn-editar').addEventListener('click', function() {
            cargarDatosParaEditar(fila);
        });

        fila.querySelector('.btn-eliminar').addEventListener('click', function() {
            eliminarFila(fila);
        });

        tablaEstudiantes.appendChild(fila);
        contador++;
    }

    limpiarFormulario();
});

function cargarDatosParaEditar(fila) {
    filaEditando = fila;
    
    // Carga los valores de las celdas de la fila al formulario
    document.getElementById('nombre').value = fila.cells[1].textContent;
    document.getElementById('cuenta').value = fila.cells[2].textContent;
    document.getElementById('carrera').value = fila.cells[3].textContent;
    
    // Cambia el texto del botón para indicar actualización
    btnRegistrar.textContent = 'Actualizar';
}

function eliminarFila(fila) {
    let confirmacion = confirm('¿Desea eliminar este registro?');
    if (confirmacion) {
        fila.remove();
        
        // Si se elimina mientras se editaba, cancela la edición
        if (filaEditando === fila) {
            btnRegistrar.textContent = 'Registrar';
            filaEditando = null;
            limpiarFormulario();
        }
    }
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('cuenta').value = '';
    document.getElementById('carrera').value = '';
}