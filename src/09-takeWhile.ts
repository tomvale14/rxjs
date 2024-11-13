
/** takeWhile permite recibir valores mientras la condición se cumpla */

import { fromEvent, map, takeWhile, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
  //tap( event => console.log( event )),
  map( ({ x, y }) => ({ x, y })),
  // takeWhile( ({ y }) => y <= 150 ),

  // parámetro inclusive: boolean   si es true incluye el valor que rompe la condición
  takeWhile( ({ y }) => y <= 150, true ),
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete'),
});