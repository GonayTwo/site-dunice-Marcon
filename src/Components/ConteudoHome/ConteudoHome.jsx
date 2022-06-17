import React from "react";
import {Link} from "react-router-dom";
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
                        ATEN<span>DIM</span>ENTO
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
        </main>
    );
}
export default ConteudoHome;