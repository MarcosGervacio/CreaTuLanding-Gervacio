import { createContext, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart]=useState([]);
    const MySwal = withReactContent(Swal)

    
    const addItem = (item, quantity) => {
        const existingItem = cart.find((cartItem) => cartItem.title === item.title);
        MySwal.fire({
          title: "Producto agregado al carrito: " + item.title + ' - Cantidad: ' + quantity,
          text: "Abre el carrito para visualizar tus productos",
          icon: "success",
        })
        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
              cartItem.title === item.title
                ? { ...cartItem, quantity: cartItem.quantity + quantity, suma: cartItem.suma + (item.price*quantity) }
                : cartItem
            );
            setCart(updatedCart);
          } else {
            setCart([...cart, { ...item, quantity: quantity, suma: item.price*quantity }]);
          }
        };


    return(
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    );
}