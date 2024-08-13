// interval y timer son asíncronos por naturaleza
import { interval, timer } from 'rxjs';

// definición del observer
const observer = {
  next: val => console.log('next', val),  // se emite el siguiente valor del observable
  complete: () => console.log('complete'),
}

const hoyEn5 = new Date();  // feacha actual
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 ); // suma 5 sg



// definición del observable
const interval$ = interval(1000);
// const timer$    = timer(2000);
// const timer$    = timer(0);
// const timer$    = timer(2000, 1000);  // inicia la secuencia despues de 2 sg y después cada sg
const timer$    = timer( hoyEn5 );       // se emite en un determinado momento programado

// suscripción al observable
console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');