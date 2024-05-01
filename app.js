/*
Realizado por:
-Santiago Andres Gonzales 
-Jennifer Acuña Amado 
*/

//------------------------------------------------------EXPLICACIÓN DEL CODIGO-----------------------------------------------------------//

//Incorporar un modulo, en este caso el http
const http=require('http')
//Se crea variable hostname para asignar la ip que se va a usar
const hostname='127.0.0.1';
//Se crea variable port para asignar el puerto por el que se va a escuchar 
const port=3000;

/*FUNCION #1 = CALLBACK
Creación del server usando la api del modulo del http, va a recibir dos parametros para manejar el request (peticiones) y el response (respuestas)
*/
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola Mundo!! :3\n')
})

//Poner en escucha el servidor, se envia por parametro el port,hostname. Esta función ejecuta el callback cuando termina enviando un mensaje de confirmacion de que se esta escuchando correctamente el server
server.listen(port,hostname,()=>{
    console.log(`Servidor esta corriendo sobre http://${hostname}:${port}`);
});