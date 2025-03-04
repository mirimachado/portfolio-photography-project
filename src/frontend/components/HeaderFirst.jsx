import React, { useState, useEffect } from 'react';

function HeaderFirst(){
    return(
    <div className="header-first">


    <a href="#services" className="header-infos">SERVIÇOS</a>
    <div className="vertical-line-header"></div>

    <a href="#contact" className="header-infos">CONTATO</a>
    <div className="vertical-line-header"></div>
    <a href="https://www.instagram.com/mili.fotografias_/" className="header-infos">INSTAGRAM</a>

      <a href="" className='logo-image'></a>
      <a href="" className='circle-logo'></a>
    <a href="mailto:milifotografiabnu@gmail.com" className='header-infos'>E-MAIL</a>
    <div className="vertical-line-header"></div>

    <a href="#aboutme" className="header-infos">SOBRE MIM</a>
    <div className="vertical-line-header"></div>

    <a href="#steps" className="header-infos"> PASSOS DO PROCESSO</a>

</div>
);
}

export default HeaderFirst;
