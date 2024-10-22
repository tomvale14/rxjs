import { of, range, asyncScheduler } from 'rxjs';

/**
 * range: emite una secuencia de números en base a un rango.
 * Por defecto son eventos síncronos, pero se pueden transformar a síncronos con asyncSheduler
 */

// const src$ = of(1,2,3,4,5);

// SINCRONO
// const src$ = range(1, 5);
// const src$ = range(-5, 10);    => 10 emisiones

// ASINCRONO
// => 'inicio', 'fin', 1..5
const src$ = range(1, 5, asyncScheduler);

console.log('inicio');
src$.subscribe( console.log )
console.log('fin');