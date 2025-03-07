import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ProductCardCart from "./ProductCardCart";
import { Link } from "react-router-dom";
import { updateProduct } from "./firebase.js";

const divProducts = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
};

const buttons = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
};

export default function CartComponent() {
  const [cart, setCart] = useContext(CartContext);

  const handleClick = () => {
    cart.map((produc) => {
        updateProduct(produc.title, { stock: produc.stock });
    });
    setCart([]);
  };

  const total = cart.reduce((acumulador, producto) => {
    return acumulador + producto.suma;
  }, 0);

  return (
    <>
      <h1>{cart.length === 0 ? "Carrito vacio!" : "Carrito"}</h1>
      <div style={divProducts}>
        {cart?.map((product) => (
          <ProductCardCart key={product.title} product={product} />
        ))}
      </div>
      {cart.length === 0 ? "" : <h2>TOTAL DE LA COMPRA: ${total}</h2>}
      <div style={buttons}>
        <Link to="/">
          <button>Continuar comprando</button>
        </Link>
        {cart.length === 0 ? (
          ""
        ) : (
          <button onClick={handleClick}>Vaciar carrito</button>
        )}
        {cart.length === 0 ? (
          ""
        ) : (
          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        )}
      </div>
    </>
  );
}
