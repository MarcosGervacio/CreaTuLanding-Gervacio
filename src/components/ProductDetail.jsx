import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import CountButton from "./CountButton";

export default function ProductDetail(){
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() =>{
        setProduct(getProduct(id));
    },[]);

    const addToCart = (quantity) => {
        alert(`Agregaste ${quantity} unidades de ${product.title} al carrito`);
    };

    return(
        <>
            <h1>Vista de detalle del producto {product?.id}</h1>
            <p>ID: {product?.id}</p>
            <h3>Nombre: {product?.title}</h3>
            <img style={{width: 300}} src={product?.image} alt="" />
            <p>Descripcion: {product?.description}</p>
            <p>Categoria: {product?.category}</p>
            <p>Precio: ${product?.price}</p>
            <CountButton onConfirm={addToCart} />
        </>
    )
}