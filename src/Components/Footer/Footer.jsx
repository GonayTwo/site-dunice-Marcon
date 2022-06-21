import React from "react";
import "./Footer.css";
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';



const Footer = () => (
    <footer>
    <div className="all">
        <div className="background">
            <div className="flex-container">

                <div className="rodape">
                    <div className="face"><FaFacebookF></FaFacebookF></div>
                    <div className="insta"><GrInstagram></GrInstagram></div>
                    <div className="link"><FaLinkedinIn></FaLinkedinIn></div>
                    <div className="logo">
                        <img src="/img/cropped-DuniceLogo_Transparente-1.png" alt=""/>
                    </div>
                <p className="textrodape">Empresa criada em 2010 com intuito de prestar serviços de cobrança.</p>
                </div>

                <div className="line"></div>

                <div className="coluna1">

                    <div className="menu" ><h2>MENU</h2></div>

                    <div className="opcoes1">

                        <div className="home" ><p>HOME</p></div>
                        <div className="qmsomos" ><p>QUEM SOMOS</p></div>
                        <div className="clientes" ><p>CLIENTES</p></div>
                        <div className="parceiros" ><p>PARCEIROS</p></div>
                        <div className="trabalhe" ><p>TRABALHE CONOSCO</p></div>
                        <div className="localizador" ><p>APP LOCALIZADOR</p></div>
                        <div className="negocie" ><p>NEGOCIE JÁ</p></div>    

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
