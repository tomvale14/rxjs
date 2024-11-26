import { concat, interval, of, take } from "rxjs";

/**
 * concat( obs1$, obs3$, obs3$, )
 * es una FUNCIÓN que recibe observables como argumento
 * (tambien puede recibi un iterable o un array) y genera un nuevo observable
 * que se suscribe automáticamente.
 * Se van emitiendo los valores del primer observable y hasta que no se completa éste
 * no se emiten los valores del siguiente observable.
 * Cuando se completa el último de los observables es cuando se completa la suscripción.
 */
const interval$ = interval(1000);

concat(
  interval$.pipe( take(3) ),
  interval$.pipe( take(2) ),
  of(1),
  [1,2,3,4],
).subscribe( console.log );



