import ButtonComponent from './ButtonComponent'
import Marca from './Marca'
import Carrito from './CartWidjet'
import './NavBar.css'

export default function NavBar(){
    return(
        <>
            <nav>
                <Marca />
                <ul>
                    <li><ButtonComponent text='Procesadores'/></li>
                    <li><ButtonComponent text='Placas de video'/></li>
                    <li><ButtonComponent text='Fuentes'/></li>
                    <li><ButtonComponent text='Monitores'/></li>
                </ul>
                <Carrito />
            </nav>
        </>
    );
}