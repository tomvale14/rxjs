import { first, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>( document, 'click');



click$.pipe(
  //first(),
  // obtener el primer evento que cumpla una determinada condición
  tap<MouseEvent>( console.log ),
  
  map( ({ clientX, clientY }) => ({clientX, clientY}) ),

  first( event => event.clientY >= 150 ),
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete'),
});