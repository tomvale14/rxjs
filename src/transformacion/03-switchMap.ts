/**
 * switchMap( () => interval() )
 * Recibe un callback que retorna un observable que puede recibir argumentos
 * que pueden ser de lo que emita el observable o el resultado del operador anterior.
 * Este nuevo observable a través de switchMap es el que se va a suscribir
 * para realizar la emisión en la salida.
 * 
 * A diferencia de mergeMap, switchMap va a mantener un solo observable activo y
 * subscrito, con lo que cuando llegue un nuevo valor de la fuente, se crea un nuevo
 * observable y al mismo tiempo se completa el observable anterior
 */
import { debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/gitbub-user.interface";

// Referencias HTML
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helper mostrar HTML
const mostrarUsuarios = ( usuarios: GitHubUser[] ) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ');
        li.append( anchor );

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent >( textInput, 'keyup' );

// input$.pipe(
//   debounceTime(500),
//   map( event => {
//     const texto = event.target['value'];
       // retorna un nuevo observable
//     return ajax.getJSON(
//       `https://api.github.com/users/${ texto }`
//     )
//   })
// ).subscribe( resp => {
//   resp.pipe(
//     pluck('url')
//   )
//   .subscribe( console.log );
// });

/**
 * mergeAll()   sirve para trabajar con observables que internamente retornan observables.
 * mergeAll controla todas las subscripcciones que tiene internamente y emite todos
 * sus valores. Hasta que todos los observables hijos que hayan sido registrados
 * por mergeAll se completen, no se lanza el complete de la suscripcción inicial.
 * Flattening operators: unificación obserbables en una única salida.
 */
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent>('target', 'value'),
  // map( event => event.target['value']),
  // map retorna un nuevo observable
  mergeMap( texto => ajax.getJSON(
      `https://api.github.com/search/users?q=${ texto }`
  )),
  pluck('items')
);//.subscribe( console.log );

// endpoint de pruebas. El delay de la respuiesta es de 1 segundo
const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    // mergeMap( texto => ajax.getJSON(url + texto) )
    switchMap( texto => ajax.getJSON(url + texto) )
).subscribe(console.log);


