import './ProductCard.css'
import {Link} from 'react-router-dom'

export default function ProductCard({product}){

    return(
        <>
            <article className='articleProduct'>
                <h3>
                    {product.title}   
                </h3>    
                <img className='imgProduct' src={product.image} alt={product.title} />
                <p>${product.price}</p>
                <button><Link to={`/product/${product.id}`}>Mas detalles</Link></button>
            </article>  
        </>
    )
}