import './styles/fonts.css';
import './styles/normalize.css';
import './styles/main.scss';
import Login from './screens/login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logIn from "./features/AuthSlice";
import { useEffect } from 'react';
import Dashboard from './screens/Dashboard';

function App() {

  const dispatch = useDispatch();

  const LogInUser = (data) => {
    dispatch(logIn(data));
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const logInU = async () => {
      let tokenU = await JSON.parse(localStorage.getItem("tokenUser"));
      
      if(tokenU){
        LogInUser(tokenU);
      }
    }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={!auth.session ? <Login/> : <Navigate to='/Dashboard'/>}/>
        <Route path='/Dashboard' element={auth.session ? <Dashboard/> : <Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
