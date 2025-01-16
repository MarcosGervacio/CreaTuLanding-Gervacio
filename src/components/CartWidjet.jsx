import carrito from '../assets/carrito.png';

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
    return(
        <>
        <div style={styleDiv}>
            <img src={carrito} alt="Imagen del carrito" width="60" />
            <span style={styleCont}>0</span>
        </div>
        </>
    );
}