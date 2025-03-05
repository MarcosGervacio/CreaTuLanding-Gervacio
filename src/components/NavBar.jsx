import ButtonComponent from './ButtonComponent'
import BrandComponent from './BrandComponent'
import './NavBar.css'
import {Link} from 'react-router-dom'
import CartWidjet from './CartWidjet'
import LoginWidjet from './LoginWidjet'

export default function NavBar(){
    return(
        <>
            <nav>
                <Link to="/"><BrandComponent /></Link>
                <ul>
                    <li><Link to="/category/procesadores"><ButtonComponent text='Procesadores'/></Link></li>
                    <li><Link to="/category/placas"><ButtonComponent text='Placas de video'/></Link></li>
                    <li><Link to="/category/fuentes"><ButtonComponent text='Fuentes'/></Link></li>
                    <li><Link to="/category/monitores"><ButtonComponent text='Monitores'/></Link></li>
                </ul>
                <Link to="/cart"><CartWidjet /></Link>
                <Link to="/login"><LoginWidjet /></Link>
            </nav>
        </>
    );
}