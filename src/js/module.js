/**
 * Acá escribo la lógica de mi módulo
 */

 //Modal
const showButton  = document.getElementById('show-modal');
const closeButton = document.getElementById('close-modal');
const modal       = document.getElementById('modal-dialog');

function toggleModal(evento){
  modal.classList.toggle('hidden');
  evento.preventDefault();
}

showButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

//Guardo datos en el localStorage

// Clase de alumno
class Contacto{
  constructor(nombre, email,tecnologia,mensaje){
    this._nombre = nombre;
    this._email = email;
    this._tecnologia= tecnologia;
    this._mensaje=mensaje;
  }

  getDatos(){
    return `${this._nombre}- ${this._email} - ${this._tecnologia} - ${this._mensaje}`;
  }
}

let arrayContacto = [];

// Functión para guardar mensaje en local storage
function guardarMensaje(mensaje){

  arrayContacto.push(mensaje);

  localStorage.setItem('mensajeContacto', JSON.stringify(arrayContacto));
}

// Agrego event listener para guardar
document.getElementById('show-modal').addEventListener("click",function(evento){

  const inputNombre   = document.getElementById('nombre').value;
  const inputEmail = document.getElementById('email').value;
  const inputTecnologia = document.getElementById('tecnologia').value;
  const inputMensaje = document.getElementById('mensaje').value;
  
  const nuevoContacto = new Contacto(inputNombre, inputEmail, inputTecnologia, inputMensaje);

  guardarMensaje(nuevoContacto.getDatos());

});