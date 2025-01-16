import './ButtonComponent.css'

export default function ButtonComponent({text}){
    
    return(
        <>
            <button className='Button'>{text}</button>
        </>
    );
}