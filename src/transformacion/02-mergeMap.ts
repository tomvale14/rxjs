/** 
 * mergeMap() es otro operador de aplanamiento, el cual va a recibir el valor
 * que se emite del primer observable y regresa un nuevo observable.
 * El observable inicial retorna el valor producto de la suscripción interna.
 * mergeMap no tiene límites de suscripciones internas y todas pueden estar activas
 * al mismo tiempo.
 * mergeMap se encarga de subscribir a cuantos observables emita el primer observable.
 */

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

/** Ejercicio 1 */
const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( letra => interval(1000).pipe(
        map( i => letra + i ),
        take(3)
    ))
)
// .subscribe({
    //    next: val => console.log('next:', val),
    //    complete: () => console.log('complete')
    // });
    
/** Ejercicio 2: ¿cuanto tiempo pasa el usuario presionando el ratón? */

const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();  // sin parámetro no espera tiempo

// Escucha cuando se pulsa el ratón. Cuando el mouseup$ emite un valor,
// se detiene el tiempo de interval$
mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );
