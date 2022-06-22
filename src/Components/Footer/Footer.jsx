import React from "react";
import "./Footer.css";
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => (
    <footer>
    <div className="all">
        <div className="background">
            <div className="flex-container">

                <div className="rodape">

                    <img src="/img/cropped-DuniceLogo_Transparente-1.png" alt=""/>

                <p className="textrodape">Empresa criada em 2010 com intuito de prestar serviços de cobrança.</p>

                    <div className="redes">

                    <div className="face" href="https://www.facebook.com/dunice.marcon.7"><FaFacebookF></FaFacebookF></div>
                    <div className="insta"><a><GrInstagram></GrInstagram></a></div>
                    <div className="link"><a><FaLinkedinIn></FaLinkedinIn></a></div>

                    </div>

                </div>

                <div className="line"></div>

                <div className="coluna1">

                    <div className="menu" ><h2>MENU</h2></div>

                    <div className="opcoes1">

                        <div className="home" ><Link to='/'>HOME</Link></div>
                        <div className="qmsomos" ><a>QUEM SOMOS</a></div>
                        <div className="clientes" ><a>CLIENTES</a></div>
                        <div className="parceiros" ><a href="http://localhost:3000/partners">PARCEIROS</a></div>
                        <div className="trabalhe" ><a>TRABALHE CONOSCO</a></div>
                        <div className="localizador" ><a href="https://drive.google.com/uc?id=1C0hZCAjZidVvSDvfH-B8eiAuqTgnPRsH&export=download">APP LOCALIZADOR</a></div>
                        <div className="negocie" ><a href="#comunicacao">NEGOCIE JÁ</a></div>    

                    </div> 

                </div>

                <div className="coluna2">   
                    <div className="contato"><h2>CONTATO</h2></div>

                    <div className="email"><p>Email:</p></div>
                    <div className="direcionamento"><a href="mailto:direcionamentos@dunice.adv.br">direcionamentos@dunice.adv.br</a></div>
                    <div className="endereco"><p>Endereço Matriz:</p></div>
                    <div className="edificio"><a href="https://www.google.com/maps/place/Edifício+Palácio+do+Comércio/@-15.7991148,-47.8885115,19z/data=!3m1!4b1!4m5!3m4!1s0x935a3bcced8175fb:0xe0f72a1418353dbf!8m2!3d-15.7991161!4d-47.8879643">Edifício Palácio do Comércio - Setor Comercial Sul Q.2 Bloco B Sobreloja - Asa Sul Brasília DF - CEP: 70318-900</a></div>
                </div>        

                <div className="phone">     
                    <h2>FONE</h2>
                    <div className="numero">     
                        <BsTelephone className="icon"></BsTelephone>
                        <p>(61)3578-8484</p>
                    </div>
                </div>
            </div>
            
            <div className="horizontal"></div>
            <div className="copyright"><h4>COPYRIGHT © 2022 TI DUNICE & MARCON</h4></div>
        </div>
    </div>
    </footer>
);

export default Footer;
