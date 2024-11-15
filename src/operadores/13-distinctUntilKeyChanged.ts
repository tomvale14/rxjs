/**
 * distinctUntilKeyChanged emite valores siempre y cuando
 * la propiedad de la emisión anterior NO sea la misma.
 * 
 * distinctUntilKeyChanged utiliza el operador de equidad '===', por lo que los objetos aunque tengan
 * las mismas propiedades, no apuntan al mismo espacio en memoria.
 */
import { distinctUntilKeyChanged, from } from "rxjs";

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
  distinctUntilKeyChanged('nombre')   // true para bloquear la emisión
)
.subscribe( console.log );