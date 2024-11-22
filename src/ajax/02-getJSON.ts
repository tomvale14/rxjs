import { ajax } from 'rxjs/ajax';

/** url para obtener la respuesta junto con los headers enviados desde el navegador web */
const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123'
});

obs$.subscribe( data => console.log('data', data) );