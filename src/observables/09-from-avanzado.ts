import { of, from } from 'rxjs';

/**
 * from => crea un Observable en base a un array, promise, observable, etc.
 * of   => crea un Observable, toma argumentos y genera una secuencia
 */

// definición del observer
const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

// genera el observable
// const source$ = from([1,2,3,4,5]);    // 5 emisiones
// const source$ = of(...[1,2,3,4,5]);   // => mismo efecto que con from
// const source$ = of(...[1,2,3,4,5]);   // 1 emisión
// const source$ = from('Tomás');        // 1 emisión por cada carácter del string
// const source$ = of('Tomás');          // 1 emisión

/**
 * => from tambien convierte una Promesa a un Observable
 * obtiene la respuesta de una petición http en forma de promesa
 */
const source$ = from<Promise<Response>>( fetch('https://api.github.com/users/klerith') );
/*
source$.subscribe( async( resp ) => {

    // console.log( resp );
    // ReadableStream es a su vez otra promesa.
    const dataResp = await resp.json();     // transforma la data a JSON
    console.log( dataResp );

});
*/

/**
 * Iterable que obtiene los valores de forma secuencial a través de una función generadora
 */
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const miIterable = miGenerador();
// 
from( miIterable ).subscribe( observer );

// suscripción del observable con el observer
// source$.subscribe( observer );
