import React from "react";
import './top-menu.css';


function TopMenu(){
    const element = document.querySelector('.container');
    console.log(element);
    
    window.addEventListener('scroll',function(){
        if(this.window.scrollY > 20)
            element.classList.add('ativo');
        else
            element.classList.remove('ativo');
    });
    return(
        <header>
            <div className="container">
                <img className="container__logo" src="img/DuniceLogo_Transparente.png" alt="" />
                <div>
                    <ul className="container__lista">
                        <li className="container__lista-item"><a href="#home">Home</a></li>
                        <li className="container__lista-item"><a href="#home">Quem Somos</a></li>
                        <li className="container__lista-item"><a href="#home">Clientes</a></li>
                        <li className="container__lista-item"><a href="#home">Parceiros</a></li>
                        <li className="container__lista-item"><a href="#home">Trabalhe Conosco</a></li>
                        <li className="container__lista-item"><a href="#home">App Localizador</a></li>
                        <li className="container__lista-item"><a href="#home">Negocie Já</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};
export default TopMenu;

