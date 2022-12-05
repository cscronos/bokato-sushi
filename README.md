Esto es [Bokato Sushi](https://bokato-sushi.vercel.app/) _link que no funciona_, razon principal de ello es que no se supo como __hostearlo correctamente o buildiar__ y este es el proyecto antiguo [`Bokato-sushi-no-framework`](https://pillan.inf.uct.cl/~csandoval/ProyWebUno/views/login/login.php).

## Bokato Sushi

### Carpetas
`/components/` => son componentes o partes de código como Reac, donde se agrega parte de codigo y funciones en algunos de ellos.

`/config/` => credenciales de sql

`/pages/` => Donde estan los archivos principales como [Index](https://github.com/cscronos/bokato-sushi/blob/main/pages/index.js), [productos](https://github.com/cscronos/bokato-sushi/blob/main/pages/productos.js), [quéines somos](https://github.com/cscronos/bokato-sushi/blob/main/pages/quienes.js), [Agregar Producto](https://github.com/cscronos/bokato-sushi/blob/main/pages/new.js), el __Index y quienes somos__ su codigo esta formado por los frameworks.

Parte importante del codigo [`/api/`](https://github.com/cscronos/bokato-sushi/tree/main/pages/api/products) donde se encuentra el crud, [[id].js](https://github.com/cscronos/bokato-sushi/blob/main/pages/api/products/%5Bid%5D.js) es donde se borra y edita, en cambio [index.js](https://github.com/cscronos/bokato-sushi/blob/main/pages/api/products/index.js) es donde se __envian y reciben__ datos.

`/styles/` => _styles.css_

Se trabajó con dos librerías importantes, [MySQL2](https://www.npmjs.com/package/mysql2) y [axios](https://axios-http.com/docs/intro), con myql2 hacemos peticiones a sql y con axios manejamos la información que trae o envían las peticiones slq.
