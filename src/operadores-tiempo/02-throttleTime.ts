/**
 * throttleTime emite el primer valor y hasta que no pasa el tiempo que se
 * encuentra como parámetro no emite el siguiente valor, ignorando los valores
 * que se hayan emitido durante ese intervalo de tiempo.
 */
import { throttleTime, distinctUntilChanged, fromEvent, map, pluck, asyncScheduler } from "rxjs";

const click$ = fromEvent(document, 'click');

/** Ejemplo 1 */
click$.pipe(
  throttleTime(3000)
)//.subscribe( console.log );

/** Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append( input );

  // Observable que está pendiente del input
const input$ = fromEvent( input, 'keyup')

input$.pipe(
  // throttleTime(1000),
  throttleTime(1000, asyncScheduler, {
    leading: false,    // primer elemento
    trailing: true    // último elemento dentro del tiempo especificado
  }),
  pluck('target', 'value'),
  // map( event => (event.target as HTMLInputElement).value ),
  // map( event => event.target['value']),
  distinctUntilChanged()    // => si la emisión es la misma que la anterior, no lo ejecuta
)
.subscribe( console.log );
