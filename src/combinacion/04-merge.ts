import { fromEvent, merge, pluck } from "rxjs";

/**
 * merge( obs1$, obs2$ )
 * es una FUNCIÓN que recibe uno o más observables como argumento
 * y genera como resultado es el producto de ambos observables combinados simultáneamente.
 * que se suscribe automáticamente.
 * La salida es la combinación de varios observables.
 * Hasta que no se completan todos los observables no se dispara el complete
 * del subscribe de la función merge.
 */
const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge(
  keyup$.pipe( pluck('type') ),
  click$.pipe( pluck('type') ),
).subscribe( console.log );

