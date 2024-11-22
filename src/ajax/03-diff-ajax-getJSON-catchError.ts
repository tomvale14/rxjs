import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

/** getJSON pbtiene la informacion de la respuesta
 *  ajax obtiene la información de la request, response, el evento, status code, etc.
 */

// url para obtener la respuesta junto con los headers enviados desde el navegador web
const url = 'https://httpbinxx.org/delay/1';
const manejaError = ( resp: AjaxError ) => {
  console.warn('error:', resp.message);
  return of({
    ok: false,
    usuarios: []
  });
}

// const obs$ = ajax.getJSON( url ).pipe(
//   catchError( manejaError )
// )
// const obs2$ = ajax( url ).pipe(
//   catchError( manejaError )
// )

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

// obs$.subscribe( data  => console.log('getJson', data) );
// obs2$.subscribe( data => console.log('ajax', data) );

/** en el subscribe podemos enviar un observer */
obs$.pipe(
  // => si se atrapa el error, envia un nuevo observable.
  //    No se dispara el error porque ya lo esta manejando el catchError
  catchError( manejaError )
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.warn('error en subs:', err),
  complete: () => console.log('complete'),
});