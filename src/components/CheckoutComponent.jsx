import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { sendOrder } from "./firebase.js";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "../context/UserContext";

export default function CheckoutComponent() {
  const [cart, setCart] = useContext(CartContext);
  const [order, setOrder] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

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
          setCart([]);
          setNombre("");
          setEmail("");
          setTelefono("");
          MySwal.fire({
            title:
              "Compra finalizada correctamente!, Se genero su orden: " + id,
            text: "Guarde la el ID de su orden para cualquier consulta o reclamo",
            icon: "success",
          }).then(() => {
            navigate("/");
          });
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
      {cart?.map((product) => (
        <li key={product.title}>
          {product.title} - Cantidad: {product.quantity}
        </li>
      ))}
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
      {user ? (
        <button onClick={handleClick}>Confirmar compra</button>
      ) : (
        <Link to="/login">
          <button>Iniciar sesion</button>
        </Link>
      )}
      <br />
      <br />
      <Link to="/cart">
        <button>Volver</button>
      </Link>
    </>
  );
}
