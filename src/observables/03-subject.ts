import { Observable, Observer, Subject } from 'rxjs';

// Definición de un Observer
const observer: Observer<any> = {
    next : value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {

    // define el subscriber
    const intervalID = setInterval (
        () => subs.next( Math.random() ), 1000
    );

    // cuando se llama a unsubscribe llama a la función que limpia el intervalo
    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruído');
    };

});
/**
 * Es un tipo de Observable. Características:
 * 
 *  1. Casteo múltiple: varias subscripciones sujetas al mismo Observable,
 *     sirviendo la misma información a todos los lugares suscritos.
 *  2. Tambien es un Observer: se puede mandar como argumento al subscriber.
 *  3. Se puede manejar el next, error y complete.
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );   // se enlaza el subject al Observable


//const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) );
//const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) );

// en lugar de suscribirse al intervalo$, se subscribe al subject$
// => los valores emitidos son los mismos
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

// Cuando los datos son producidos por el observable en sí mismo,
// es considerado un "Cold Observable". Pero cuando los datos son producidos
// FUERA del observable, se llama "Hot Observable".
// => Un subject permite trasnformar un Cold Observable en un Hot Observable.
setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500);