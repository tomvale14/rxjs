/**
 * distinct deja pasar los valores que no han sido previamente emitidos por el observable
 * 
 * distinct utiliza el operador de equidad '===', por lo que los objetos aunque tengan
 * las mismas propiedades, no apuntan al mismo espacio en memoria.
 */
import { distinct, from, of } from "rxjs";

const numeros$ = of(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
  distinct(),   
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
    nombre: 'X',
  },
  {
    nombre: 'Dr. Willy',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
];

from( personajes ).pipe(
  distinct( p => p.nombre )   // si el nombre ya se ha emitido, no lo vuelve a emitir
)
.subscribe( console.log );