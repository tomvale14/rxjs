/**
 * catchError  sirve pa atrapar cualquier error que suceda en el observable.
 * Al atrapar el error se puede enviar un mensaje de error o devolver un
 * nuevo observable. Cuando se completa este segundo observable, se completa
 * la suscripcción.
 */
import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

/** Función para manejar el posible error */
const manejaErrores = ( response: Response ) => {

    if ( !response.ok ) {
      throw new Error( response.statusText );
    }
    return response;
} 

/** Petición HTTP utilizando fetch API */

const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err) );

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     // para que se dispare el catch tiene que haberse lanzado un throw en las promesas
//     .catch( err => console.warn('error en usuarios', err) );

/** Petición HTTP utilizando el objeto ajax de RxJs */

const atrapaError =  (err: AjaxError) => {
  console.warn('error en:', err.message);
  return of([]);
}

ajax( url ).pipe(
  // pluck('response'),   => deprecated
  map( resp => resp.response ),
  catchError( atrapaError ),
)
.subscribe( users => console.log('usuarios:', users) );
