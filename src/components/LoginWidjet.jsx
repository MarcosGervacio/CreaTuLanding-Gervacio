
import usuario from '../assets/login.png';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { app } from './firebase';
import { useContext, useEffect } from "react";
import { UserContext } from '../context/UserContext';


const auth = getAuth(app);

export default function LoginWidjet(){
    const [user, setUser] = useContext(UserContext);

          useEffect(() => {
              setPersistence(auth, browserLocalPersistence)
                  .catch((error) => {
                      console.error("Error en la persistencia de usuario:", error);
                  });
      
              onAuthStateChanged(auth, (user) => {
                  if (user) {
                      setUser(user.email);
                  } else {
                      setUser(null); 
                  }
              });
          }, [auth, setUser]); 
    

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