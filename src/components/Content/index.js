import React from 'react'
import { BsCircleFill } from 'react-icons/bs'

import laptop from '../../img/laptop.svg'
import check from '../../img/check.png'
import apple from '../../img/apple.png'
import play from '../../img/play.png'
import microsoft from '../../img/microsoft.png'
import device from '../../img/devices.svg'


import './style.css'

function Content() {
  return (
      <div className="content">
          <div className="content-one">
             <div className="content-icons">
                <img src={check} alt=" " className="check" />         
                <img src={laptop} alt="laptop" className="laptop" />
             </div>
             <h1>Baixe o Spotify</h1>
             <p>Escute milhões de músicas no seus dispositivo.</p>
             <button type="button">Baixar</button>
          </div>
          <div className="content-two">
            <h2>Curta as suas músicas também no seu celular ou tablet.</h2>
            <p>Ouvir música no celular ou tablet é fácil, divertido e grátis.</p>
            <div className="icons-download">
                <img src={apple} alt="Download App Store" />
                <img src={play} alt="Download Google Play" />
                <img src={microsoft} alt="Download Microsoft" />
            </div>
          </div>
          <div className="content-three">
            <img src={device} alt="devices" />
            <h1>Uma só conta para curtir a música em qualquer dispositivo.</h1>
            <div className="links">
                <p>celular</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p>computador</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p>tablet</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p>carro</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p className="tags">playstation</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p className="tags">xbox</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p className="tags">tv</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p className="tags">alto-falante</p>
                <BsCircleFill color="green" size="0.5rem" />
                <p className="tags">web player</p>
            </div>
          </div>
      </div>
  );
}

export default Content;