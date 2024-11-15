/**
 * debounceTime cuenta las milésimas de segundo que han pasado desde la última emisión.
 * Si dichas milésimas de segundo sobrepasa el parámetro, emite el valor.
 * Restringe la cantidad de emisones de la fuente.
 */
import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs";

const click$ = fromEvent(document, 'click');

/** Ejemplo 1 */
click$.pipe(
  debounceTime(3000)
);
// .subscribe( console.log );

/** Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append( input );

  // Observable que está pendiente del input
const input$ = fromEvent( input, 'keyup')

input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  // map( event => (event.target as HTMLInputElement).value ),
  // map( event => event.target['value']),
  distinctUntilChanged()    // => si la emisión es la misma que la anterior, no lo ejecuta
)
.subscribe( console.log );



