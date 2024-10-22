import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck, tap } from 'rxjs/operators';

// range(1,5).subscribe( console.log );

// la idea es que cuando sale la información del observable 
// a través del subscribe es que esté lo más procesada posible
// range(1,5).pipe(
//     map<number, string>( val => (val * 10).toString() )
// )
// .subscribe( console.log );

/**
 * - Operador map
 * - Operador pluck: extrae el valor de una propiedad de un objeto
 *                   que se emite del observable
 * - Operador mapTo: cuando el Observable emite un valor, el operador mapTo('valor')
 *                   transforma la salida a 'valor'
 */
// 1. creación del observable que estará pendiente del DOM cuando se suelte una tecla
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

// => si solo quiero trabajar con el código de la tecla, defino otro observable
const keyupCode$ = keyup$.pipe(
    //tap( event => console.log(event) ),
    map( event => event.code )
);
const keyupPluck$ = keyup$.pipe(
    pluck('key')
);
const keyupPluckAnidado$ = keyup$.pipe(
    pluck('target', 'baseURI')      // parámetros separados por comas
);
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);

// 2. suscripción al observable
keyup$.subscribe( console.log );    // KeyboardEvent

keyupCode$.subscribe( code => console.log('map', code ) );

keyupPluck$.subscribe( key => console.log('pluck', key ) );

keyupPluckAnidado$.subscribe( key => console.log('target.baseURI', key ) );

keyupMapTo$.subscribe( val => console.log('mapTo', val ) );
