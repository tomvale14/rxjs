import { combineLatest, fromEvent, pluck } from "rxjs";

/**
 * combineLatest( obs1$, obs2$ )
 * es una FUNCIÓN que recibe uno o más observables como argumentos, combina
 * y emite los valores de todos los observables internos simultáneamente.
 * 
 * combineLatest regresa un nuevo observable que no va a emitir valores hasta que
 * todos los observables internos hayan emitido al menos un valor.
 * 
 * La salida va a ser un array con los últimos valores emitidos de todos los observables
 * en el orden que fueron enviados a la función combineLatest.
 * Hasta que no se completan todos los observables no se dispara el complete
 * del subscribe de la función combineLatest.
 * 
 * obs1$: a   b             c   d   e   |
 * obs2$:   1   2   3   4    |
 * 
 * salida:  a1   b1   b2   b3   b4   c4   d4   e4
 */
/** Ejercicio 1 */

// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest(
  //   keyup$.pipe( pluck('type') ),
  //   click$.pipe( pluck('type') ),
  // ).subscribe( console.log );
  
  /** Ejercicio 2 */

  const input1 = document.createElement('input');
  const input2 = document.createElement('input');

  input1.placeholder = 'email@gmail.com';

  input2.placeholder = '**********';
  input2.type = 'password';

  document.querySelector('body').append( input1, input2 );

  // Función Helper
  const getInputStream = (elem: HTMLElement) => 
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
      pluck('target', 'value')
    );

  combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
  ).subscribe( console.log );

