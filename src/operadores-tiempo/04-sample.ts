/**
 * sample(click$) emite el último valor emitido por el observable hasta que el primer
 * observable (interval$) que tenemos dentro del operador sample emita un valor.
 * Se completa la emisión cuando se completa el primer observable.
 */

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$    = fromEvent(document, 'click');


interval$.pipe(
  sample( click$ ), // obtiene la muestra de cómo está el primer observable en ese momento
)
.subscribe( console.log );


