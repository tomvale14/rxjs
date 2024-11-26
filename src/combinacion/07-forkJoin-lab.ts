import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

/**
 * Caso de uso de forkJoin: realizar peticiones ajax de manera simultánea
 */
const GITHUB_API_URL = 'https://api.github.com.users';
const GITHUB_USER    = 'klerith';

forkJoin({
  usuario: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }`
  ),
  repos: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }/repos`
  ).pipe(
    // se pueden controlar errores de forma independiente en cada petición
    catchError( err => of([]) )
  ),
  gists: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
  ),


}).pipe(
  catchError( err => of(err.message) )
)
.subscribe( console.log );

