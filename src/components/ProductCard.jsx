import './ProductCard.css'
import {Link} from 'react-router-dom'

export default function ProductCard({product}){

    const sinStock = {
        backgroundColor: "rgba(255, 95, 95, 0.5)",
        width: "90px",
        margin: "0 auto",
        border: "1px solid black", 
        borderRadius: "10px",
    }
    const enStock = {
        backgroundColor: "rgba(102, 247, 102, 0.5)",
        width: "90px",
        margin: "0 auto",
        border: "1px solid black", 
        borderRadius: "10px",
    }

    return(
        <>
            <article className='articleProduct'>
            {product.stock === 0 ? <p style={sinStock}>Sin stock</p> : <p style={enStock}>En stock</p>}
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