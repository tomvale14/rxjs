/**
 * sampleTime obtiene el último valor emitido en un intervalo de tiempo,
 * pero si no se emitió ningún valor, no emite nada.
 * Permite tener una suscripción que está pendiente de cada una de sus emisiones
 * en periodos de tiempo.
 */

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  sampleTime(2000),
  map( ({ x, y }) => ({ x, y })),

)
.subscribe(console.log);
