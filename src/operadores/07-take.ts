import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1,2,3,4,5);

/** take emite los x primeros valores y cancela la suscripción */

numeros$.pipe(
  tap( t => console.log('tap:', t) ),
  take(3),
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete'),
});