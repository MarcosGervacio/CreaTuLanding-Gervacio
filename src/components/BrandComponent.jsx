import marca from '../assets/marca.png';
import {Link} from 'react-router-dom'

export default function BrandComponent(){
    return(
        <>
            <Link to="/">
                <img src={marca} alt="Logo de la marca" width="100"/>
                <p>Inicio</p>
            </Link>   
        </>
    );
}