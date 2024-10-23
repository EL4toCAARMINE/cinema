import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../features/AuthSlice';
import MovieFunction from '../components/MovieFunction';

export default function Dashboard(){
    const movies = [
        { id: 1, name: "COCO", movie: 1, status: 1, date: "01/10/2024", hour: "2:00" },
        { id: 2, name: "Coraline", movie: 2, status: 2, date: "02/10/2024", hour: "4:00" },
        { id: 3, name: "La Posesión de Deborah Logan", movie: 3, status: 3, date: "03/10/2024", hour: "6:00" },
        { id: 4, name: "Winnie the Pooh: Miel y Sangre", movie: 4, status: 1, date: "04/10/2024", hour: "8:00" },
        { id: 5, name: "Abracadabra", movie: 5, status: 2, date: "05/10/2024", hour: "10:00" },
        { id: 6, name: "Zombies Party", movie: 6, status: 3, date: "06/10/2024", hour: "12:00" },
        { id: 7, name: "MEGAN", movie: 7, status: 1, date: "07/10/2024", hour: "2:00" }
      ];
      
    
    const dispatch = useDispatch();

    const LogOutUser = (data) => {
        dispatch(logOut(data));
    }

    useEffect(()=>{
    }, []);

    const logOutU = () => {
        LogOutUser({
            id: null,
            session: false,
            token: null,
            user: null
        });
        localStorage.removeItem("tokenUser");
    }

    return(
        <div className="container">
            <header>
                <h2>Funciones</h2>
                <div className='contLogOut' title='Cerrar Sesión' onClick={()=>{logOutU()}}>
                    <svg className='logOut' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#fff" d="M17 17H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8z"/><path fill="#fff" d="M7 15v-4h8V9H7V5l-6 5z"/></svg>
                </div>
            </header>
            <main>
                {movies.map((movie)=>{
                    return <MovieFunction data={movie}/>
                })}
            </main>
        </div>
    );
}