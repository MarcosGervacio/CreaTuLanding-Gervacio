import { useContext, useEffect, useState } from "react"
import { getProduct } from './firebase.js';
import { useParams } from "react-router-dom";
import CountButton from "./CountButton";
import { CartContext } from "../context/CartContext";

export default function ProductDetail(){
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const [cart, setCart, addItem] = useContext(CartContext);

    // const handleClick = () => {
    //     addItem(product);
    // }

    useEffect(() =>{
        getProduct(id).then((product) => setProduct(product));
    },[]);

    const addToCart = (quantity) => {
        alert(`Agregaste ${quantity} unidades de ${product.title} al carrito`);
        addItem(product, quantity);
    };

    return(
        <>
            <h1>Vista de detalle del producto</h1>
            <h3>Nombre: {product?.title}</h3>
            <img style={{width: 300}} src={product?.image} alt="" />
            <p>Descripcion: {product?.description}</p>
            <p>Categoria: {product?.category}</p>
            <p>Precio: ${product?.price}</p>
            {/* <button onClick={handleClick}>Agregar al carrito</button> */}
            <CountButton onConfirm={addToCart} />
        </>
    )
}