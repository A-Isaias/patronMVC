## Template Engine en nuestros proyectos
1- Instalar un TEMPLATE ENGINE

   cmd: 
   ``````
   npm i ejs
   ``````
2- Configurar app para el uso de archivos ".ejs" en app.js
   
   code: 
   ````
   app.set('view engine', 'ejs');
   ````
   *Si las views no estan al mismo nivel que app.js o con nombre diferente a views

   code: 
   ``````
   app.set('views', './src/views');
   ``````
   El método ".set(param1, param2)" permite definir configuraciones de Express:

     - param1: lo que queremos Configurar

     - param2: valor de la configuración     

3- Envío de información a los archivos ".ejs"


Siempre para el envío de datos lo hacemos a través de un objeto literale como 2º parámetro de la función

Ej. a las vistas:
``````
res.render('home',{ title: 'Mercado  Liebre', data: data })}
``````
Ej. a los partials
``````
<%- include('./partials/header.ejs', {encabezado: 'Mercado'}) %>
``````

4- En los archivos ".ejs"

Para implementar código JS
``````
<% %>
``````
Para mostrar un valor
``````
<%= %>
``````
Para la utilización de los partials
``````
<%- include('path/to/file')>
``````


-----------------------------------------------------

## Utilización del EXPRESS-GENERATOR

1- Única vez: 
``````
npm install express-generator -g
``````

2- Creamos nuestro proyecto con la platilla
``````
express  myApp --ejs
``````

3- Entramos al proyecto
``````
cd myApp
``````

4- Instalamos los  módulos
``````
npm install
``````




