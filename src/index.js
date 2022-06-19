import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import Productos from './routes/Productos';
import Perfil from './routes/Perfil';
import Inicio from './routes/Inicio';
import Register from './routes/Register';
import Login from './routes/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
            <Route path="" element={<Inicio></Inicio>}></Route>
            <Route path="Productos" element={<Productos></Productos>}></Route>
            <Route path="Perfil" element={<Perfil></Perfil>}></Route>
            <Route path="registrarse" element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

