import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const ApplicationRoutes = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}/>
        </Routes>
    </BrowserRouter>
);
export default ApplicationRoutes;