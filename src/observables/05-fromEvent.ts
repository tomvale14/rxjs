import { fromEvent } from 'rxjs';

// permite crear Observables en base a un tipo de event target

/**
 * => eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

// observer
const observer = {
    next: val => console.log( 'next', val )
};
// suscripciones
src1$.subscribe( ({ x, y }) => {  // destructura las propiedades x, y
    console.log(x, y);
});
src2$.subscribe( evento => {
    console.log( evento.key );
});