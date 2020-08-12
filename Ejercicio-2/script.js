/**
 * Eventos.
 * Ejemplo 7: Aplica el mismo handler a múltiples elementos.
 */
let colors = 'red';
// Event handler: Esta función se ejecuta cuando el evento se dispara.
function changeColor(event) {
  if(colors == 'red'){
    event.currentTarget.style.backgroundColor = 'red';
    colors = 'blue';
  }else{
    event.currentTarget.style.backgroundColor = 'blue';
    colors = 'red'
  }
}

// document.getElementByTagName(): Obtiene un array (HTMLCollection) con todos los
// elementos del tipo indicado.
let elements = document.querySelectorAll('div');
// Asigna el event handler a *cada* elemento.
// Itera sobre los elementos usando for.
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}