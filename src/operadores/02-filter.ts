import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );

range(20,30).pipe(
    filter<number>( (val, i) => {
        console.log( 'index', i );
        return val % 2 === 1;
    })
)//.subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman',
    },
    {
        tipo: 'heroe',
        nombre: 'Robin',
    },
    {
        tipo: 'villano',
        nombre: 'Joker',
    },
];

from(personajes).pipe(
    filter<Personaje>( p => p.tipo !== 'heroe' )
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ),         // <KeyboardEventy, string>
    filter( key => key === 'Enter' ),   // <string, string>
);

keyup$.subscribe( console.log )

