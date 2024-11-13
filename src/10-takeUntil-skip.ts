
/**
 * takeUntil sigue emitiendo valores hasta 
 * que el segundo observable emita su primer valor
 */
/**
 * skip(x) salta las x emisiones iniciales
 */

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

// 1. crear el elemento 'boton' para emitir valores
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append( boton );

// 2. Primer Observable
const counter$ = interval(1000);

// 3a. Segundo Observable para takeUntil
// const clickBtn$ = fromEvent( boton, 'click' );
// 3b. Segundo Observable para skip
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
  tap( () => console.log('tap antes de skip') ),
  skip(1),   // salta 1 emisiones del evento producido que es un click
  // => en la primera emisión del click después del skip no se continúa
  //    con el segundo tap. en la segunda emisión si se ejecuta el segundo tap.
  tap( () => console.log('tap después de skip') ),
);

// 4. Implementar el operador takeUntil
counter$.pipe(
  takeUntil( clickBtn$ )  // al segundo click emitido por el observable clickBtn$, se completa
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
});