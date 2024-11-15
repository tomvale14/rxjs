/**
 * auditTime  emite el último valor que ha sido emitido por el observable
 * en periodos de tiempo pasados como parámetro.
 * Si se completa el observable antes de que se cumpla la fracción de tiempo,
 * no se emite ningún valor.
 */

import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map( ({ x }) => ({ x }) ),
  tap( val => console.log('tap', val) ),
  auditTime(2000),
)
.subscribe( console.log );