import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { sendOrder } from "./firebase.js";
import { Link } from "react-router-dom";

export default function CheckoutComponent() {
  const [cart, setCart] = useContext(CartContext);
  const [order, setOrder] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce((acumulador, producto) => {
    return acumulador + producto.suma;
  }, 0);

  const handleClick = () => {
    if (!nombre || !email || !telefono) {
      alert("Por favor, completa todos los campos.");
      return;
    } else {
      console.log("asd");
      setOrder({
        buyer: {
          nombre: nombre,
          email: email,
          telefono: telefono,
        },
        date: new Date(),
        items: cart,
        total: total,
      });
    }
  };

  useEffect(() => {
    if (order) {
      console.log("Orden actualizada:", order);
      sendOrder(order)
        .then((id) => {
          console.log("Orden enviada con ID:", id);
          setOrderId(id);
          setCart([]);
          setNombre("");
          setEmail("");
          setTelefono("");
        })
        .catch((error) => {
          console.error("Error al enviar la orden:", error);
        });
    }
  }, [order]);

  return (
    <>
      <h1>Checkout</h1>
      <h2>Finaliza tu compra!</h2>
      <h3>productos:</h3>
      {cart?.map(product => product.title + ' - cantidad: ' + product.quantity)}
      <p>Total a pagar: ${total}</p>
      <label htmlFor="nombre">Nombre </label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="email">Email </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="telefono">Telefono </label>
      <input
        type="tel"
        id="telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Confirmar compra</button>
      <br />
      <br />
      <Link to="/cart">
        <button>Volver</button>
      </Link>
    </>
  );
}
