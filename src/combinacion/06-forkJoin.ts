import { delay, forkJoin, interval, of, take } from "rxjs";

/**
 * forkJoin( obs1$, obs2$, obs3$ )
 * es una FUNCIÓN que recibe uno o más observables como argumentos.
 * Los valores que emiten tienen que ser finitos.
 * forkJoin retorna un observable.
 * La salida va a ser un array con los últimos valores emitidos de todos los observables.
 * Hasta que no se completan todos los observables no se dispara el complete
 * del subscribe de la función.
 * El resultado va a ser una array que podemos transformar en un objeto.
 */
const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) );  // 0..1..2
const letras$ = of('a','b','c').pipe( delay(3500) );

// forkJoin(
//   numeros$,
//   intervalo$,
//   letras$
// ).subscribe( console.log );

// forkJoin(
//   numeros$,
//   intervalo$,
//   letras$
// ).subscribe( resp => {
//   console.log('numeros: ', resp[0] );
//   console.log('intervalo: ', resp[1] );
//   console.log('letras: ', resp[2] );
// });

/** Si los argumentos se envían como OBJETO se emiten pares de valores
 *  con el nombre del observable: valor
 */
// forkJoin({
//   numeros$,
//   intervalo$,
//   letras$
// }).subscribe( resp => {
//   console.log( resp );
//   // console.log( resp.letras$ );
// });

/** personalizar los nombres de las variables de salida */
forkJoin({
  num: numeros$,
  int: intervalo$,
  let: letras$
}).subscribe( resp => {
  console.log( resp );
});