import ResponsiveAppBar from './components/nav';
import {Outlet} from "react-router-dom"
import "./app.css"
import React, { useEffect, useState } from 'react';
import './css/nav.css'
import sesionContext from './context/sesionContex';

function App() {
  const [userSesion, setUserSesion] = React.useState({userName: '', img: ''})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('sesionData'))

    if(data != null){
      setUserSesion({userName: data.name})
    }else{
      setUserSesion({userName: ''})
    }
  }, [])

  return (
    <>
    <sesionContext.Provider value = {{
      userSesion, setUserSesion
    }}>
      <ResponsiveAppBar userSesion={userSesion}></ResponsiveAppBar>
      <Outlet></Outlet>
    </sesionContext.Provider>
    </>
  );
}

export default App;
