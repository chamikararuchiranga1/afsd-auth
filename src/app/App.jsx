import './App.css'
import Main from '../component/Main/Main.jsx'
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import {useEffect, useState} from "react";
function App() {

    const [login, setLogin] = useState(false);

    useEffect(() => {
        const key = localStorage.getItem('stmToken');
        if(key !== null){
            setLogin(true);
        }else {
            setLogin(false)
        }
    }, []);

  return (
    <div>
        {
            login ?
                <Main/>
                :
                <div>
                    <Routes>
                        <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/register'} element={<Register/>}/>
                    </Routes>
                </div>
        }
    </div>
  )
}

export default App;

