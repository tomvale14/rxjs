/**
 * concatMap( () => interval$.pipe( take(3)) )
 * Es otro operador de aplanamiento que sirve para concatenar los observables
 * resultantes que pueden fluir a través de este operador.
 * Al ser un operador de aplanamiento cuando se recibe un observable,
 * automáticamente se subscribe a dicho observable y el resultado en la salida será
 * el producto de dicho observable.
 * Si se recibe un nuevo observable:
 * --------------------------------
 *  => no emite los valores, sino que lo concatena al último valor emitido
 *     cuando el observable anterior se completa.
 */

import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

// source
const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000).pipe( take(3) );

click$.pipe(
    // switchMap( () => interval$ )
    concatMap( () => interval$ )    // concatena los observables
)
.subscribe( console.log );