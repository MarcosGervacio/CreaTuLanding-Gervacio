
import usuario from '../assets/login.png';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

const auth = getAuth(app);

export default function LoginWidjet(){
    const [user, setUser] = useContext(UserContext);

    return(
        <>
            <div>
              <img src={usuario} alt="login" width="60px" />
              <br />
              <span>{user ? user : 'invitado'}</span>
            </div>
        </>
    );
}