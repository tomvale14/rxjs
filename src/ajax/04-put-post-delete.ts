import { ajax } from "rxjs/ajax";

// url para obtener la respuesta junto con los headers enviados desde el navegador web
const url = 'https://httpbin.org/delay/1';

// ajax.put( url, {     // body
//   id: 1,
//   nombre: 'Tomas'
// }, {                  // headers
//   'mi-token': 'ABC123'
// }).subscribe( console.log );

ajax({
  url: url,
  method: 'POST', // => ventaja: tambien puede ser 'DELETE'
  headers: {
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    nombre: 'Tomas'
  }
}).subscribe( console.log );