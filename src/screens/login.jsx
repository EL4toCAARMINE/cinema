import React, { useState } from 'react'
import logo from '../assets/logo.png';
import {useDispatch} from 'react-redux';
import { logIn } from '../features/AuthSlice';
import magobrujo from '../assets/MagoBrujo.mp4';
import Loader from '../components/Loader';

export default function Login (){
    const [error, setError] = useState(false);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [isvisibleAlert, setisvisibleAlert] = useState(false);
    const [isVisible, setisVisible] = useState(false);

    const dispatch = useDispatch();

    const LogInUser = (data) => {
        dispatch(logIn(data))
    }
    
    const validateKeys = (e) => {
        e.preventDefault();
        setisVisible(true);
        
        if(user === "" || pass === ""){
            setError(true);
            setisVisible(false);
            return;
        }

        //Agregar consulta a la api
        let infoSession = {
            id: 1,
            session: true,
            token: "this is a token",
            user: "Kevin"
        }
        LogInUser(infoSession);

        localStorage.setItem("tokenUser", JSON.stringify(infoSession));

        setError(false);
        setisVisible(false);
    }
    
    return(
        <div className='loginContainer'>
            <div className="loginContainerForm">

                <img className='logo' src={logo} alt="Logo" />

                <form className="form">
                    <span className="input-span">
                        <label htmlFor="user" className="label">Usuario</label>
                        <input type="text" name="user" id="user" value={user} onChange={(e) => {setUser(e.target.value)}}/>
                    </span>
                    <span className="input-span">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" id="password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                    </span>
                    <span className="span" onClick={()=>{setisvisibleAlert(true)}}>¿Olvidaste tu contraseña?</span>
                    <input className="submit" type="submit" value="Iniciar sesión" onClick={(e) => {validateKeys(e)}}/>
                </form>

                {error&&
                    <div className="error">
                        <p className="errorText">Credenciales incorrectas</p>
                    </div>
                }

            </div>

            <Loader visible={isVisible} text={"Iniciando sesión"}/>

            {isvisibleAlert&&
                <div className="backAlert">
                    <div className="containerAlert">
                        <video 
                            className='video'
                            src={magobrujo}
                            autoPlay
                            loop
                        >
                            Tu navegador no soporta videos
                        </video>
                        <p className="textVideo">¡Emprende una travesía épica! 🌌 Busca al sabio Mago Brujo 🧙‍♂️, el maestro de los secretos arcanos ✨, y consulta con él sobre el origen de este enigma que ha desatado tu destino. 🌟</p>
                    </div>
                    <button className='ok' onClick={()=>{setisvisibleAlert(false)}}></button>
                </div>
            }
        </div>
    );
}