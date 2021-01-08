import React, { Fragment } from 'react';
import Header from './Header';

const Sobre = () =>{

    return (
        <Fragment>
            <Header />
            <h1>Sobre</h1>
            <h2>Localizada no coração da cidade traz para o mercado o que
					há de melhor de confeitaria. Fundada em 2019
					, a Pão Doce já é destaque na cidade e conquista
							  novos clientes a cada dia.</h2>
            <p>Oferecemos profissionais experientes e antenados às mudanças no mundo
                 da moda. O atendimento possui padrão de excelência e agilidade,
                  garantindo qualidade e satisfação dos nossos clientes.</p>

                  
                  <div class="beneficios">
					<h3 class="pp"> beneficios</h3>

					<ul>
						<li class="itens">atendimento ao cliente</li>
						<li class="itens">espaço diferenciado</li>
						<li class="itens">localizaçao</li>
						<li class="itens">profissionais qualificados</li>
					</ul>
				</div>
                  
        </Fragment> 
    );
}

export default Sobre;