export default function ItemListComponent({text}){

    const styleH1 = {
        textAlign:"center", 
        paddingTop:'110px',
        color: 'rgb(0, 162, 255)',
    }

    return(
        <>
            <h1 style={styleH1}>{text}</h1>
        </>
    );
}