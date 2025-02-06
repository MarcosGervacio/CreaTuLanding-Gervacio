import { useState } from "react"

export default function CountButton({onConfirm}){
    const [value, setValue] = useState(0);
    const max = 10;

    const handleChange = (e) => {
        const inputValue = parseInt(e.target.value);
        setValue(inputValue > max ? max : inputValue);
    }

    const handleClick = () =>{
        onConfirm(value);
    };
    
    return(
        <>
            <span>cantidad: </span>
            <input
                type="number"
                max={10}
                min={0}
                value={value}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Agregar al carrito</button>
        </>
    )
}