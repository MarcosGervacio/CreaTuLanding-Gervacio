import ButtonComponent from './ButtonComponent'
import BrandComponent from './BrandComponent'
import Carrito from './CartWidjet'
import './NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <nav>
                <BrandComponent />
                <ul>
                    <li><Link to="/category/procesadores"><ButtonComponent text='Procesadores'/></Link></li>
                    <li><Link to="/category/placas"><ButtonComponent text='Placas de video'/></Link></li>
                    <li><Link to="/category/fuentes"><ButtonComponent text='Fuentes'/></Link></li>
                    <li><Link to="/category/monitores"><ButtonComponent text='Monitores'/></Link></li>
                </ul>
                <Carrito />
            </nav>
        </>
    );
}