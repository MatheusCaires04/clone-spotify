import React from 'react'
import { SiSpotify } from 'react-icons/si'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'


import './style.css'

function Footer() {
  return (
      <div className="footer">
          <div className="footer-logo-links">
            <div className="logo-footer">
                <SiSpotify size="13%" cursor="pointer" /> <span>Spotify</span>
            </div>
            <div className="links-footer">
                <div className="empresa">
                    <span>empresa</span>
                    <ul>
                        <li>Sobre</li>
                        <li>Empregos</li>
                        <li>For the Record</li>
                    </ul>
                </div>
                <div className="comunidades">
                    <span>comunidades</span>
                    <ul>
                        <li>Para artistas</li>
                        <li>Desenvolvedores</li>
                        <li>Publicidade</li>
                        <li>Investidores</li>
                        <li>Fornecedores</li>
                    </ul>
                </div>
                <div className="links-uteis">
                    <span>links úteis</span>
                    <ul>
                        <li>Suporte</li>
                        <li>Player da Web</li>
                        <li>Aplicativo móvel grátis</li>
                    </ul>
                </div>
            </div>
            <div className="social-network">
                <ul>
                    <li><AiOutlineInstagram size="30px" /></li>
                    <li><AiOutlineTwitter size="30px" /></li>
                    <li><FaFacebookF size="25px" /></li>
                </ul>
            </div>
          </div>
          <div className="suporte">
              <div className="suporte-links">
                <nav className="footer-links">
                    <a href="#">Legal</a>
                    <a href="#">Centro de Privacidade</a>
                    <a href="#">Política de privacidade</a>
                    <a href="#">Cookies</a>
                    <a href="#">Sobre anúncios</a>
                </nav>
              </div>
              <div className="copy-footer">
                <div className="icon-footer">
                    <p className="icon-copy"><BiWorld /> Brasil</p>
                </div>
                <p className="copy">© 2021 Spotify AB</p>
              </div>
          </div>
      </div>
  );
}

export default Footer;