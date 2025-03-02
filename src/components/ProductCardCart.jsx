import './ProductCard.css'
import { CartContext } from "../context/CartContext";
import { useContext } from "react"
import { updateProduct } from "./firebase.js";
export default function ProductCardCart({product}){
    const [cart, setCart] = useContext(CartContext);


    return(
        <>
            <article className='articleProduct'>
                <h3>
                    {product.title} 
                </h3>    
                <img className='imgProduct' src={product.image} alt={product.title} />
                <p>${product.price}</p>
                <p>cantidad: {product.quantity}</p>
                <p>suma: ${product.suma}</p>
                <button onClick={() => {setCart(cart.filter(a =>a.title !== product.title))

                    cart.map((produc) => {
                        if(produc.title === product.title){
                        updateProduct(product.title, {stock: product.stock})
                    }
                    })

                }}>Eliminar</button>
            </article>  
        </>
    )
}