
import React, { Fragment } from 'react';
import Header from '../../Componentes/Header';
import './Produtos.css';
import Rodape from '../../Componentes/Rodape';

const Produtos = () => {

	return (
		<Fragment>
			<Header />
			<body>
				<header>
					<h1 class="titulo-principal">Doceria Pão Doce</h1>
					<div class="imagem" src="./img/doces.jpg"></div>
				</header>
				<div class="principal">
					<h2 class="titulo-centralizado">Nossos deliciosos doces</h2>
					<p class="texto-produtos"> Com produtos selecionados e profissionais de destaque no mercado alimenticio
					oferecemos uma ampla linha de produtos de Padaria. Se delicie!</p>
				</div>

				<section class="doces">
					<div class="doce">
						<div class="doce-imagem primeira-imagem">
							<button class="botao waves-effect waves-light btn-large">Bolos</button>
						</div>
					</div>
					<div class="doce">
						<div class="doce-imagem segunda-imagem">
							<button class="botao waves-effect waves-light btn-large">Gelados</button>
						</div>
					</div>
					<div class="doce">
						<div class="doce-imagem terceira-imagem">
							<button class="botao waves-effect waves-light btn-large">Bombons</button>
						</div>
					</div>
					<div class="doce">
						<div class="doce-imagem quarta-imagem">
							<button class="botao waves-effect waves-light btn-large">Salgados</button>
						</div>
					</div>
				</section>
			</body>
			<Rodape />
		</Fragment>
	);
}
export default Produtos;
