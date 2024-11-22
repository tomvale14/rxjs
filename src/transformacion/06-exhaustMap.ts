/**
 * exhausMap( () => interval$.pipe( take(3)) )
 * Es otro operador de aplanamiento que recibe un observable y maneja la
 * suscripción internamente.
 * 
 * exhausMap() solamente mantiene una suscripción activa antes de poder antes
 * de poder añadir otra suscripción para que emita los valores.
 * => Si se emite un nuevo observable antes de que se complete la suscripción activa,
 * este nuevo observable se ignora.
 * Este operador es útil cuando tenemos muchos elementos que estan lanzando
 * muchos eventos rápidamente, los cuales podemos ignorar. Por ejemplo cuando se
 * pulsa un botón repetidamente o cuando se pulsa la tecla Enter varias veces que
 * podría causar problemas de doble submit.
 */
import { exhaustMap, fromEvent, interval, take } from "rxjs";

// source
const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000).pipe( take(3) );

click$.pipe(
    // switchMap( () => interval$ )
    // concatMap( () => interval$ )
    exhaustMap( () => interval$ )
)
.subscribe( console.log );