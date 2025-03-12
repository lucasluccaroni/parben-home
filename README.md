# **Parben Home**
### _Mobiliario de diseño_

## **[Link aquí](http://parbenhome.com)**

Parben Home es una aplicacion web diseñada para una mueblería de diseño.


## Hecha con:

- React
- Vite
- Firebase (Firestore Database + Storage)


> Ofrece al usuario informarse sobre los productos que ofrece el local, contactarse con los dueños y tener acceso a sus redes
> Tambien provee información acerca de la empresa.

## Rutas de la aplcación

### /home
Visualiza el Inicio, el home de la pagina.
Esta contiene:
- Un título + descripción del emprendimiento
- Las categorías de los productos que ofrecen
- Un video del local
- Informacion de contacto + mapa

> El **Navbar** y el **Footer**, de manera lógica, están siempre presente en todas las rutas de la aplicación.


### /productos
Lleva al usuario a visualizar nuevamente todas las categorias de los productos que se ofrecen, pero esta vez renderiza un componente que se encarga de mostrar esta informacion de manera mas grande para que el usuaario elija mas cómodo.


### /productos/:category
Una vez elejida la categoría, la misma se pasa al parámetro de la URL y se renderiza un componente con un listado de todos los productos en formato card que corresponden a la categoría seleccionada. Los mismos son traídos desde la base de datos.


### /productos/:category/:productId
Cuando el usuario elije el producto que desea ver en detalle, el ID del mismo es pasado como parámetro en la URL y se busca en la base de datos la información completa de éste. La información completa de cada producto es:

#### _Producto:_

| clave | valor |
| ------ | ------ |
| ID | ID único del producto |
| name | Nombre del producto |
| description1 | 1era descripción del producto |
| description2 | 2da descripción del producto |
| description3 | 3era descripción del producto |
| img1 | Imagen horizontal del producto (para la card) |
| img2 | Imagen vertical del producto (para el detalle) |



### /servicios
Aporta al usuario información sobre los servicios que ofrece la empresa con la compra de sus productos.


### /quienes-somos
Brinda informacion acerca del origen y el propósito de la empresa.


### /contacto
Ofrece la posibilidad de dejar alguina consulta a la empresa a través de un formulario.
El mismo tiene validaciones en todos sus campos para asegurar su correcto envío, con advertencias visuales al usuario en caso de tener algun campo erroneo y una confirmación de envío cuando se realiza correctamente.

Esta consulta se drige a:
1) El correo electrónico de la empresa, detallando toda la información de contacto que dejó el usuario + la consulta propiamente dicha.
2) Se guarda en la base de datos de la siguiente manera:

| clave | valor |
| ------ | ------ |
| ID | ID único de la consulta |
| date | Fecha en la que realizó la consulta (dd/mm/aa - hh:mm)|
| firstName | Nombre del usuario|
| lastName | Apellido del usuario |
| email | Correo electrónico del usuario |
| phone | Teléfono del usuario |
| message | La consulta que dejó el usuario |



### /como-comprar
Explica al usuario como realizar correctamente su compra a través de 5 pasos para dejar en claro el mecanismo que usa la empresa para el mismo.

***
## Tech
Las dependencias utilizadas para esta aplicación fueron:
```sh
@eslint/js
@types/react
@types/react-dom
@vitejs/plugin-react
eslint
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-react-refresh
globals
vite
@emailjs/browser
firebase
react
react-dom
react-router-dom
react-toastify
```

## Despliegue


El deploy de la aplicación se realiza en [Vercel](https://www.vercel.com) con sus respectivas variables de entorno y un dominio personalizado. 