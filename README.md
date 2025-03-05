# Ecommerce GamerShop   

Simulador de Ecommerce implementando Firebase en REACT

## Caracteristicas
- Firebase para los productos
- Filtro para las distintas categorias de productos
- useContext para el carrito y usuario
- Control de stock (descuento al agregar al carrito y se revierte si eliminas el producto del carrito o lo vacias )
- input para agregar producto al carrito con validacion para que no puedan agregar mas del stock disponible
- SweetAlert para las notificaciones de producto agregado al carrito y al finalizar la compra
- Checkout en donde se visualiza los productos, cantidades, total a pagar, formulario a llenar. Al finalizar te otorga el ID de la orden guardada en la base de datos.
- Renderizado condicional para: CartWidjet, todo el contenido del carrito (botones, stock, validacion si esta vacio el carrito, loadings)
- Al finalizar la compra te redirige al inicio
- Sistema de login con firebase Auth (logeo, cerrar sesion, para finalizar compra debes estar logeado)

## Deploy en VERCEL: https://crea-tu-landing-gervacio.vercel.app/

## Instalacion

instrucciones para instalar y configurar el proyecto

```bash
    git clone https://github.com/MarcosGervacio/CreaTuLanding-Gervacio
    cd CreaTuLanding-Gervacio
    npm install
    npm run dev
```