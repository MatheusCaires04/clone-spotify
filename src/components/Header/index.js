import React from 'react'
import { SiSpotify } from 'react-icons/si'

import './style.css'

function Header() {
  return (
      <div className="header">
          <header className="menu">
            <div className="logo">
              <SiSpotify size="13%" cursor="pointer" /> <span>Spotify</span>
            </div>
            <nav>
                <ul>
                    <li>Premium</li>
                    <li>Suporte</li>
                    <li>Baixar</li>
                    |
                    <li>Inscrever-se</li>
                    <li>Entrar</li>
                </ul>
            </nav>
          </header>
      </div>
  );
}

export default Header;