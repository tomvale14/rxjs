import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
  startWith(true),
)
.subscribe( resp => {

  if ( resp === true ) {
    // muestra el loading
    body.append( loadingDiv );
  } else {
    // borra el cualquier elemento HTML que tenga la clase loading
    document.querySelector('.loading').remove();
  }
  console.log(resp);
});
