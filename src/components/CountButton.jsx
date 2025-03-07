import { useState } from "react"

export default function CountButton({onConfirm ,product}){
    const [value, setValue] = useState(1);
    const max = product.stock;
    const min = 1;
    const handleChange = (e) => {
        const inputValue = parseInt(e.target.value);
        if(e.target.value === ''){
            setValue(min) ;
        }else{
            setValue(inputValue > max ? max : inputValue);
        };
    }

    const handleClick = () =>{
        onConfirm(value);
    };
    
    return(
        <>
            <span>cantidad: </span>
            <input
                type="number"
                max={product.stock}
                min={1}
                value={value}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Agregar al carrito</button>
        </>
    )
}