import React from "react";
import ConteudoHome from "../ConteudoHome/ConteudoHome.jsx";
import TopMenu from "../TopMenu/TopMenu.jsx";
import Footer from "../Footer/Footer.jsx";

const PaginaInicial = () =>(
    <main>
        <TopMenu/>
        <ConteudoHome/>
        <Footer/>
    </main>
);
export default PaginaInicial;