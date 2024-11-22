import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Formulario HTML
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Función Helper
const peticionHttpLogin = userPass =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
          // pluck('response', 'token'),
          map( res => res.response['token'] ),
          catchError( err => of('Error')),
        )


/** Configuraciones */
  // email
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

  // password
inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

  // button
submitBtn.innerHTML = 'Enviar'

  // form
form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

/** => prevenir comportamiento por defecto de refresh al pinchar en el botón
  *    o al pulsar intro en una caja de texto
  */ 

/** Streams */
const submitForm$ = fromEvent<Event>( form, 'submit' )
  .pipe(
    tap( event => event.preventDefault() ),
    map( event => ({
      email: event.target[0].value,
      password: event.target[1].value
    })),
    // mergeMap( userPass => peticionHttpLogin( userPass) ),
    // => el primer argumento que se recibe, se pasa como parámetro a la función
    // mergeMap( peticionHttpLogin ),

    // => switchMap cancela las suscripciones pendientes y solo regresa la última.
    // switchMap( peticionHttpLogin ),

    // => exhaustMap si se emite un nuevo observable antes de que se complete la 
    //    suscripción activa, este nuevo observable se ignora.
    exhaustMap( peticionHttpLogin ),
  );

  // => al realizar la suscripción, previene el comportamiento por defecto de submit
  //    y por consiguiente el correspondiente refresh
submitForm$.subscribe( token => {
  console.log( token );
})