import React, { Fragment } from 'react';
import Header from './Header';
import './Sobre.css';
import Rodape from './Rodape';

const Sobre = () => {

    return (
        <Fragment>
            <Header />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <section className="sobre">

                <div className="conteudo-sobre">
                    <p className="texto">Localizada no coração da cidade traz para o mercado o que
                    há de melhor de confeitaria.</p>
                    <p className="texto2">Fundada em 2019, a Pão Doce já é destaque na cidade e conquista
					novos clientes a cada dia.</p>
                    <p className="texto3">Oferecemos profissionais experientes e antenados às mudanças no mundo
                    da moda. O atendimento possui padrão de excelência e agilidade,
                  garantindo qualidade e satisfação dos nossos clientes.</p>
                    <div class="ilustracao"></div>
                </div>

                <div className="beneficios">
                    <h3 className="pp"> Beneficios</h3>
                    <ul className="itens">
                        <li><i class="tiny material-icons">loyalty</i> Espaço diferenciado</li>
                        <li><i class="tiny material-icons">face</i> Atendimento ao cliente</li>
                        <li><i class="tiny material-icons">group</i> Profissionais qualificados</li>
                        <li><i class="tiny material-icons">restaurant_menu</i> Produtos deliciosos e de qualidade!</li>
                    </ul>
                </div>
                
            </section>
            <Rodape />
        </Fragment>
    );
}

export default Sobre;