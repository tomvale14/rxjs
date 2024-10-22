import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1 )
// ).subscribe( console.log );

range(20,30).pipe(
    filter<number>( (val, i) => {
        console.log( 'index', i );
        return val % 2 === 1;
    })
)//.subscribe( console.log );

const personajes = [
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
]
