import { useContext } from 'react';
import carrito from '../assets/carrito.png';
import { CartContext } from '../context/CartContext';

const styleDiv = {
    border: '3px solid black',
    borderRadius: '10px',
    padding: '5px',
    borderColor: 'rgba(245, 242, 242, 0.1)'
}

const styleCont = {
    color:'rgb(123, 255, 0)',
    fontSize: '30px'
}

export default function CartWidjet(){
    const [cart] = useContext(CartContext);

    const total = cart.reduce((acumulador, producto) => {
        return acumulador + producto.quantity;
      }, 0);

    return(
        <>
        <div>{cart.length === 0 ? '' : <div style={styleDiv}>
            <img src={carrito} alt="Imagen del carrito" width="60" />
            <span style={styleCont}>{total}</span>
        </div>}</div>
        </>
    );
}