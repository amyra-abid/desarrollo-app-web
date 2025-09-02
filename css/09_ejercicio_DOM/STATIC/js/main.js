// main.js

// Ejercicio 1: Registro de Estudiante
(() => {
    const form = document.getElementById('formRegistroEstudiante');
    const resultado = form.nextElementSibling; // <p class="resultado">
    const error = resultado.nextElementSibling; // <p class="error">
    const btnLimpiar = document.getElementById('btnLimpiarRegistro');
    // Arreglo para almacenar registros de estudiantes
    const registros = [];
    // Función para capitalizar la primera letra de cada palabra
    function capitalizarNombre(nombre) {
    return nombre
        .trim()
        .toLowerCase()
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    }

    // Contar registros por jornada
    function contarPorJornada() {
        let mañana = 0, tarde = 0;
        for (const r of registros) {
        if (r.jornada === 'Mañana') mañana++;
        else if (r.jornada === 'Tarde') tarde++;
    }
        return `Registrados: ${mañana} en Mañana, ${tarde} en Tarde.`;
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
      // Limpiar mensajes anteriores
    resultado.textContent = '';
    error.textContent = '';
      // Obtener valores
        let nombre = form.nombre.value;
        const edadStr = form.edad.value;
        const curso = form.curso.value;
        const jornada = form.jornada.value;
        const aceptaReglamento = form.aceptaReglamento.checked;

      // Validaciones
        if (!nombre || nombre.trim().length < 2) {
        error.textContent = 'Por favor, ingrese un nombre válido con al menos 2 caracteres.';
        return;
        }
    const edad = Number(edadStr);
        if (!edadStr || isNaN(edad) || edad < 14 || edad > 100) {
        error.textContent = 'La edad debe estar entre 14 y 100 años.';
        return;
}
        if (!curso) {
        error.textContent = 'Seleccione un curso válido.';
        return;
    }
        if (!jornada) {
            error.textContent = 'Seleccione una jornada.';
        return;
        }
        if (!aceptaReglamento) {
        error.textContent = 'Debe aceptar el reglamento para continuar.';
        return;
        }
      // Normalizar nombre
        nombre = capitalizarNombre(nombre);
      // Guardar registro
            registros.push({ nombre, edad, curso, jornada });
      // Mostrar resumen
        const saludo = `Hola, ${nombre}. Tienes ${edad} años, estás en el curso ${curso} y asistes en la jornada ${jornada}.`;
        const resumenJornada = contarPorJornada();

        resultado.textContent = `${saludo}\n${resumenJornada}`;
    });
    btnLimpiar.addEventListener('click', () => {
        form.reset();
        resultado.textContent = '';
        error.textContent = '';
    });
    })();
  // Ejercicio 2: Calculadora de Promedio de Notas
    (() => {
    const form = document.getElementById('formNotas');
    const inputNota = form.nota;
    const btnAgregar = document.getElementById('btnAgregarNota');
    const btnCalcular = document.getElementById('btnCalcularPromedio');
    const btnEliminarUltima = document.getElementById('btnEliminarUltimaNota');
    const btnLimpiar = document.getElementById('btnLimpiarNotas');
    const resultado = form.nextElementSibling;
    const error = resultado.nextElementSibling;
    
    // Arreglo para notas
    let notas = [];

    // Función para validar nota
    function validarNota(n) {
        return typeof n === 'number' && !isNaN(n) && n >= 1.0 && n <= 7.0;
    }
    btnAgregar.addEventListener('click', () => {
        error.textContent = '';
        resultado.textContent = '';
        let val = inputNota.value;
        const notaNum = parseFloat(val);
        if (!val) {
        error.textContent = 'Ingrese una nota antes de agregar.';
        return;
    }
        if (!validarNota(notaNum)) {
        error.textContent = 'La nota debe estar entre 1.0 y 7.0.';
        return;
        }

    notas.push(notaNum);
        resultado.textContent = `Nota agregada: ${notaNum.toFixed(1)}\nNotas actuales: ${notas.map(n => n.toFixed(1)).join(', ')}`;
        inputNota.value = '';
        inputNota.focus();
    }); 
    btnCalcular.addEventListener('click', () => {
        error.textContent = '';
        resultado.textContent = '';
        if (notas.length === 0) {
        error.textContent = 'No hay notas para calcular promedio.';
        return;
        }
      // Calcular promedio con bucle for...of
        let suma = 0;
        for (const n of notas) {
        suma += n;
    }
        const promedio = suma / notas.length;
        const aprobado = promedio >= 4.0 ? 'Aprobado' : 'Reprobado';

        resultado.textContent =
        `Total de notas: ${notas.length}\n` +
        `Lista de notas: ${notas.map(n => n.toFixed(1)).join(', ')}\n` +
        `Promedio: ${promedio.toFixed(2)}\n` +
        `Estado: ${aprobado}`;
    });

    btnEliminarUltima.addEventListener('click', () => {
        error.textContent = '';
        resultado.textContent = '';

            if (notas.length === 0) {
        error.textContent = 'No hay notas para eliminar.';
        return;
    }
        notas.pop();
        resultado.textContent = `Última nota eliminada.\nNotas actuales: ${notas.map(n => n.toFixed(1)).join(', ') || '[ninguna]'}.`;
    });
    btnLimpiar.addEventListener('click', () => {
        notas = [];
        error.textContent = '';
        resultado.textContent = 'Todas las notas han sido eliminadas.';
        inputNota.value = '';
    });
})(); 