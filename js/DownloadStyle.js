const selectOpcion = document.getElementById("tipoLicencia");

const PreciolicenciaSencilla = 100;
const PreciolicenciaPremium = 175;

const selectorLicencia = document.getElementById('tipoLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('pasoFinal');
let precioLicencia = document.getElementById('costo');

const descargarBtn = document.getElementById('pasoFinal');

selectorLicencia.addEventListener('change', function() {
  if (selectorLicencia.value === 'sencilla') {
    descripcionLicencia.textContent = 'Licencia basica: obtienes acceso a las funciones basicas de Sistema ADUP.';
    precioLicencia.textContent = ` $${PreciolicenciaSencilla}`;

    descargarBtn.addEventListener('click', function() {
        Swal.fire({
            icon: 'question',
            title: 'Confirmar descarga',
            text: '¿Estás seguro de descargar la licencia Basic del Sistema ADUP por 100 dolares?',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire('La descarga del Sistema comenzo exitosamente!', '', 'success');
            }
        });
        });

  } else if (selectorLicencia.value === 'premium') {
    descripcionLicencia.textContent = 'Licencia completa: obtienes acceso a muchas mas funciones del sistema ADUP.';
    precioLicencia.textContent = ` $${PreciolicenciaPremium}`;

    descargarBtn.addEventListener('click', function() {
        Swal.fire({
            icon: 'question',
            title: 'Confirmar descarga',
            text: '¿Estás seguro de comprar la licencia Complete del Sistema ADUP por 175 dolares?',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire('La descarga del Sistema comenzo exitosamente!', '', 'success');
            }
        });
        });
  } else {
    descripcionLicencia.textContent = 'Seleccione una Licencia';
    precioLicencia.textContent = `$`;
  }
});



const descManual = document.getElementById('DescargarManual')

descManual.addEventListener('click', function() {
    Swal.fire({
        icon: 'question',
        title: 'Confirmar descarga',
        text: 'estas por descargar el manual informativo del sistema ADUP',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire('Comenzo tu descarga', '', 'success');
        }
    });
    });