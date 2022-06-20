import React from "react";
import {Link} from "react-router-dom";
import Iframe from 'react-iframe';
import './ConteudoHome.css';
import { AiFillPhone,AiOutlineWhatsApp,AiOutlineMail } from 'react-icons/ai';
import {BsFillChatLeftTextFill} from 'react-icons/bs';

function ConteudoHome(){
    return(
        <main>
            <div className="containerHome">
                <div className="containerHome__conteudo">
                    <h1>
                        Bem vindo à 
                        <span className="texto__vermelho"> Dunice </span> 
                        & 
                        <span className="texto__cinza"> Marcon </span>
                        advogados
                    </h1>
                    <p>
                        Solução em recuperação de crédito para sua empresa.
                    </p>
                </div>
            </div>
            <div className="containerComunicacao">
                <div className="containerComunicacao__titulos">
                    <h1 className="containerComunicacao__h1">
                        SAIBA MAIS SOBRE NOSSOS CANAIS DE 
                    </h1>
                    <h2 className="containerComunicacao__h2">
                        ATEN<span className="borda__vermelha">DIM</span>ENTO
                    </h2>
                </div>

                <div className="containerComunicacao__grid" id="comunicacao">
                    <div className="containerComunicacao__meiosContato">
                        <div className="containerComunicacao__meiosContato-textos">
                            <h3>Telefone</h3>
                            <p>Ligue para nós! Nosso horário de atendimento é de segunda a sexta-feira, das 8h00 às 18h00.</p>
                        </div>
                        <div className="containerComunicacao__meiosContato-icone">
                            <a href="tel:+556135788484"><AiFillPhone/></a>
                        </div>
                    </div>

                    <div className="containerComunicacao__meiosContato">
                        <div className="containerComunicacao__meiosContato-textos">
                            <h3>WhatsApp</h3>
                            <p>Uma vez adicionado o nosso número ao seu telefone ou computador, abriremos um canal de comunicação de forma rápida e segura.</p>
                        </div>
                        <div className="containerComunicacao__meiosContato-icone">
                            <a href="https://api.whatsapp.com/send?phone=556193279516" target="_blank"><AiOutlineWhatsApp/></a>
                        </div>
                    </div>

                    <div className="containerComunicacao__meiosContato">
                        <div className="containerComunicacao__meiosContato-textos">
                            <h3>E-mail</h3>
                            <p>Através do nosso e-mail, você poderá negociar suas pendências diretamente com nossa equipe.</p>
                        </div>
                        <div className="containerComunicacao__meiosContato-icone">
                            <a href="mailto:direcionamentos@dunice.adv.br"><AiOutlineMail/></a>
                        </div>
                    </div>
                    
                    <div className="containerComunicacao__meiosContato">
                        <div className="containerComunicacao__meiosContato-textos">
                            <h3>Chat</h3>
                            <p>Prático e seguro, o nosso atendimento via Chat Online é uma ótima opção para esclarecer dúvidas e negociar em tempo real com nossos atendentes.</p>
                        </div>
                        <div className="containerComunicacao__meiosContato-icone">
                            <a href="#"><BsFillChatLeftTextFill/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerParceiros">
                <div className="containerParceiros__textos">
                    <h1>Confira nossos <span className="texto__vermelho">Clientes</span> e <span className="texto__cinza">Parceiros</span></h1>
                    <Link className="containerParceiros__imagem-btn" to="/partners">Clique aqui</Link>
                </div>
                <div className="containerParceiros__imagem">
                    <img src="img/desc-parceiros3.png" alt="" />
                </div>
            </div>
            <div className="containerLocalizacao">
                <h1>Nos en<span className="borda__vermelha">con</span>tre</h1>
                <div className="containerLocalizacao__item">
                    <div className="containerLocalizacao__item-texto">
                        <h2>Matriz <span className="borda__vermelha">Brasília</span></h2>
                        <p>
                            Setor Comercial Sul(SCS)
                            Ed. Palácio do Comércio
                            Sobreloja 34 CEP. 70.318-900
                        </p>
                    </div>

                    <div className="containerLocalizacao__item-mapa">
                        <Iframe 
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0911441341545!2d-47.89014258514505!3d-15.799147389048237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ae1fec97839%3A0x91e2016493eb0ba!2sDunice%20%26%20Marcon%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1655733418106!5m2!1spt-BR!2sb"
                        width="600px"
                        height="300px"
                        />
                    </div>    
                </div>

            </div>
            
        </main>
    );
}
export default ConteudoHome;