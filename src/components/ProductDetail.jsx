import { useContext, useEffect, useState } from "react";
import { getProduct, updateProduct } from "./firebase.js";
import { useParams } from "react-router-dom";
import CountButton from "./CountButton";
import { CartContext } from "../context/CartContext";
import ReactLoading from "react-loading";

const loadingContainer = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
};

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [cart, setCart, addItem] = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((product) => {
      setProduct(product);
      setLoading(false);
    });
  }, []);

  const addToCart = (quantity) => {
    addItem(product, quantity);
    updateProduct(product.title, { stock: product.stock - quantity });
    setProduct({ ...product, stock: product.stock - quantity });
  };

  return (
    <>
      <h1>Vista de detalle del producto</h1>
      {loading ? (
        <>
          <div style={loadingContainer}>
            <ReactLoading type="spin" color="#fff" />
          </div>
        </>
      ) : (
        <>
          <h3>Nombre: {product?.title}</h3>
          <img style={{ width: 300 }} src={product?.image} alt="" />
          <p>Descripcion: {product?.description}</p>
          <p>Categoria: {product?.category}</p>
          <p>Precio: ${product?.price}</p>
          {product?.stock === 0 ? (
            <p>Producto sin stock.</p>
          ) : (
            <>
              <p>Stock: {product?.stock}</p>
              <CountButton onConfirm={addToCart} product={product} />
            </>
          )}
        </>
      )}
    </>
  );
}
