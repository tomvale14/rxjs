/**
 * switchMap( () => interval() )
 * Recibe un callback que retorna un observable que puede recibir argumentos
 * que pueden ser de lo que emita el observable o el resultado del operador anterior.
 * Este nuevo observable a través de switchMap es el que se va a suscribir
 * para realizar la emisión en la salida.
 * A diferencia de mergeMap, switchMap va a mantener un solo observable activo y
 * subscrito, con lo que cuando llegue un nuevo valor de la fuente, se crea un nuevo
 * observable y al mismo tiempo se completa el observable anterior
 */

import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

// source
const click$ = fromEvent( document, 'click' );
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( () => interval$ )
    switchMap( () => interval$ )
).subscribe( console.log );


