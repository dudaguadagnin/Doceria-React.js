import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper light-green lighten-1">
                <a href="/" class="brand-logo right">Doceria Pão Doce</a>
                <ul class="left ">
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;