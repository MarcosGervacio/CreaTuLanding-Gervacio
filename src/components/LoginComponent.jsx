import { app } from "./firebase.js";
import { useState } from 'react';
import usuario from '../assets/login.png';
import { useContext } from "react";
import { UserContext } from '../context/UserContext';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const auth = getAuth(app);

export default function LoginComponent(){
    const [registrando, setRegistrando] = useState(false);
    const [email, setEmail] = useState('');
    const [user, setUser] = useContext(UserContext);
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    
    const FunctAutentication = async(e) =>{
        e.preventDefault();
        const correo = e.target.correo.value;
        const contraseña = e.target.contraseña.value;
        if(registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                MySwal.fire({
                    title: "Usuario creado correctamente",
                    text: "Su usuario es: " + correo,
                    icon: "success",
                  });
            e.target.correo.value = '';
            e.target.contraseña.value = '';
            } catch (error) {
                console.log("Error al crear usuario ", error);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                setUser(correo);
                navigate('/');
            } catch (error) {
                console.log("Usuario o contraseña incorrecta. ", error);
            }
        }
    }

    const handleResetPassword = async() => {
        if(email === ''){
            alert('El campo de email se encuentra vacio, ingrese un email valido!');
        } else {
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Si el correo ingresado existe se enviara un email para recuperar la contraseña');
        } catch (error) {
            alert('Email invalido u ocurrio un error: ', error);
        }
    }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
      };
    
    return(
        <>
        {user ? 
        <>
        <br /><br />
        <p>{user}</p>
        <button onClick={ async() => {
            await signOut(auth);
            setUser(null);
        }}>Cerrar sesion</button>
        </>
        : 
        <>
                <br /><br /><br />
                <form onSubmit={FunctAutentication}>
                <img src={usuario} alt="login" width="60px" />
                <br />
                <input type="text" placeholder='Ingresar email' id="correo" onChange={handleChange}/>
                <br />
                <input type="password" placeholder='Ingresar Contraseña' id="contraseña"/>
                <br /><br />
                <button>{registrando ? 'Registrarse' : 'Iniciar sesion'}</button>
            </form>
            <br />
            <span>{registrando ? 'Si ya posee un usuario -> ' : 'No posee un usuario? -> '}</span>
            <button onClick={() => setRegistrando(!registrando)}>{registrando ? 'Iniciar sesion' : 'Registrarse'}</button>
            <br /><br />
            <span>{registrando ? '' : 'Olvido su contraseña? -> '}</span>
            {registrando ? '' : <button onClick={handleResetPassword}>Recuperar contraseña</button>}
            </>
        }
        </>
    );
}