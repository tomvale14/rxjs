import { Observable, Observer } from 'rxjs';

// Definición de un Observer
const observer: Observer<any> = {
    next : value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subscriber => {

    // crear contador: 1, 2, 3, 4, 4, ....
    let contador: number = 0;
    const interval = setInterval( () => {
        contador++;
        // cada segundo emite el valor de contador
        subscriber.next( contador );
        console.log(contador);
    }, 1000);

    setTimeout( () => {
        subscriber.complete();
    }, 2500);

    // => se ejecuta cuando se llama al unsubscribe del Observable
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruído');
    }
    

});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

// encadenar suscripciones a la suscripción original
subs1.add( subs2 );
subs1.add( subs3 );
// para cancelar la suscripción
setTimeout( () => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout');
}, 6000);