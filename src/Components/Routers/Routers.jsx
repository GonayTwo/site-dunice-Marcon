import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import PaginaInicial from '../PaginaInicial/PaginaInicial.jsx'
import PaginaParceiros from "../PaginaParceiros/PaginaParceiros.jsx";

const ApplicationRoutes = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PaginaInicial/>}/>
            <Route path="/partners" element={<PaginaParceiros/>}/>
        </Routes>
    </BrowserRouter>
);
export default ApplicationRoutes;