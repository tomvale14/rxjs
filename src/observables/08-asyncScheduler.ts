
/**
 * asyncScheduler solo crea una SUSCRIPCION, NO un Observable.
 * asyncScheduler permite crear un setTimeout o setInterval con una suscripción
 */
import { asyncScheduler } from 'rxjs';

// setTimeout( () => {}, 3000 );
// setInterval( () => {}, 3000 );

/** 1. Uso como si fuese un setTimeout */
//     => configurar un setTimeout utilizando un asyncScheduler
const saludar  = () => console.log('Hola Mundo');
const saludar2 = (nombre) => console.log(`Hola ${ nombre }`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Tomas' );

/** 2. Uso como si fuese un setInterval */
//     => configurar un setInterval utilizando un asyncScheduler
const subs = asyncScheduler.schedule( function(state) {

    console.log('state', state);

    // siguiente llamada al schedule con el nuevo estado
    this.schedule( state + 1, 1000 );

}, 3000, 0 );

// destruye la suscripción
// setTimeout( () => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )
