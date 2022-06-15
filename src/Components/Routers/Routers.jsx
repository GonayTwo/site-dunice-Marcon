import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";


const ApplicationRoutes = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}/>
        </Routes>
    </BrowserRouter>
);
export default ApplicationRoutes;