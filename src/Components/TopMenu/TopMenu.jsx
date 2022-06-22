import React from "react";
import './top-menu.css';
import {Link} from 'react-router-dom';

function TopMenu(){
    setTimeout(() => {
        const element = document.querySelector('.container');;
        const imgLogo = document.querySelector('.container__logo');

        window.addEventListener('scroll',function(){
            if(this.window.scrollY > 20){
                element.classList.add('ativo');
                imgLogo.src = 'img/DuniceLogo_Transparente.png';
            }else{
                element.classList.remove('ativo');
                imgLogo.src = 'img/cropped-DuniceLogo_Transparente-1.png';
            }
        });
    }, 300);
    

    return(
        <header>
            <div className="container">
                <a href="/">
                    <img className="container__logo" src="img/cropped-DuniceLogo_Transparente-1.png" alt="" />
                </a>
                <div>
                    <ul className="container__lista">
                        <li className="container__lista-item"><a href="#home">Home</a></li>
                        <li className="container__lista-item"><a href="#home">Quem Somos</a></li>
                        <li className="container__lista-item"><a href="#home">Clientes</a></li>
                        <li className="container__lista-item"><Link to='/partners'>Parceiros</Link></li>
                        <li className="container__lista-item"><a href="#home">Trabalhe Conosco</a></li>
                        <li className="container__lista-item"><a href="https://drive.google.com/uc?id=1C0hZCAjZidVvSDvfH-B8eiAuqTgnPRsH&export=download" target="_blank">App Localizador</a></li>
                        <li className="container__lista-item"><a href="#comunicacao">Negocie Já</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
};
export default TopMenu;

