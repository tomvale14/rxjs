/**
 * distinctUntilChange emite valores siempre y cuando la emisión anterior NO sea la misma
 * 
 * distinctUntilChange utiliza el operador de equidad '===', por lo que los objetos aunque tengan
 * las mismas propiedades, no apuntan al mismo espacio en memoria.
 */
import { distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
  distinctUntilChanged(),   
)
.subscribe( console.log );

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Dr. Willy',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Zero',
  },
];

from( personajes ).pipe(
  distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )   // true para bloquear la emisión
)
.subscribe( console.log );