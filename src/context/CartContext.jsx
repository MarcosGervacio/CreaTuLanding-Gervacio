import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart]=useState([]);

    
    const addItem = (item, quantity) => {
        const existingItem = cart.find((cartItem) => cartItem.title === item.title);
        if (existingItem) {
            // Si el producto ya existe, actualiza la cantidad
            const updatedCart = cart.map((cartItem) =>
              cartItem.title === item.title
                ? { ...cartItem, quantity: cartItem.quantity + quantity, suma: cartItem.suma + (item.price*quantity) }
                : cartItem
            );
            setCart(updatedCart);
          } else {
            // Si el producto no existe, agrégalo al carrito con la cantidad
            setCart([...cart, { ...item, quantity: quantity, suma: item.price*quantity }]);
          }
        };


    return(
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    );
}