import ResponsiveAppBar from './components/nav';
import {Outlet} from "react-router-dom"
import "./app.css"
import React, { useState } from 'react';
import './css/nav.css'
function App() {
  const [userSesion, setUserSesion] = React.useState({userName: '', img: ''})
  return (
    <>
      <ResponsiveAppBar userSesion={userSesion}></ResponsiveAppBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
