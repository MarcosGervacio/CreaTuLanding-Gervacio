import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getProducts, filterProductsByCategory } from './firebase.js';

const divProducts = {
    display: 'flex',
    justifyContent:'center',
    flexWrap: 'wrap',
    gap: '2rem',
}
const styleH1 = {
    textAlign:"center", 
    paddingTop:'30px',
    color: 'rgb(0, 162, 255)',
}

export default function itemListContainer({text}){
    const [products, setProducts]=useState(null);
    const {catId} = useParams();


    useEffect(() =>{
        if(!catId){
            getProducts().then((response) => setProducts(response));
        } else {
            filterProductsByCategory(catId).then((response) => setProducts(response));
        }
    },[catId]);

    return(
        <>
            <h1 style={styleH1}>{text} {catId}</h1>
            <div style={divProducts}>
                {products?.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    );
}