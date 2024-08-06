import { Observable, Observer } from 'rxjs';

// Definición de un Observer
const observer: Observer<any> = {
    next : value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    // emisión de los valores
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // error forzado de js
    // const a = undefined;
    // a.nombre = 'Tomas';
    
    // termina las suscripciones de los subscribers
    subs.complete();
    
    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe( observer );

// obs$.subscribe( 
//     valor => console.log('next:', valor),   // next
//     error => console.warn('error:', error), // error
//     () => console.info('Completado')        // complete
// );



