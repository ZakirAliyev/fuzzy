import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/index.jsx";

function MainPage() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default MainPage;