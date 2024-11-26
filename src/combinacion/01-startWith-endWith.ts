/**
 * startWith  permite realizar la emisión del argumento antes de que 
 * el observable comience a emitir aunque sea un valor síncrono.
*/
/**
 * endtWith  antes de que se complete el observable va a emitir
 * el valor que se pasa como parámetro.
*/
import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1,2,3,).pipe(   // of es síncrono
  startWith('a','b','c'),
  endWith('x','y','z'),
);

numeros$.subscribe( console.log );
