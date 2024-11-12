import { from, map, reduce, scan } from "rxjs";

/** => el operador scan emite el valor acumulado
       cada vez que el Observable emite un valor
       scan ( (acc, cur) => acc + cur, 0 )
*/
const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }
const totalAcumulador = (acc, cur) => acc + cur;

// *** Observable empleando reduce ***
from( numeros ).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );  // => una sola emisión con el total acumulado

// *** Observable empleando scan ***
from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );  // => un valor por cada emisión

// Patrón Redux: maneja el estado global de la aplicación en un único objeto

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;

}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

// observable para mantener todas las modificaciones del estado del usuario
const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })   // estado inicial
);

// suscripción para estar pendiente de los cambios del 'id' del usuario
const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );


