
/** => el operador reduce no emite ningún valor hasta que se completa el Observable
       reduce ( (acc, cur) => acc + cur, 0 )
*/

import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

// => sin emplear rxjs

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}
const total = numbers.reduce( totalReducer, 0 );
console.log('total arr', total);

// => empleando rxjs

interval(500).pipe(
    take(6),
    tap( console.log ),
    reduce( totalReducer )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});