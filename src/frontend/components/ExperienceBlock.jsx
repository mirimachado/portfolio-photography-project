import React, { useState, useEffect } from "react";
import photo1 from "../../assets/photo-1.png";
import photo2 from "../../assets/photo-2.png";
import photo3 from "../../assets/photo-3.png";

import { useCarousel } from "./UseCarousel";


function ExperienceBlock() {
  const images = [photo1, photo2, photo3];

    const { currentIndex, nextImage, prevImage } = useCarousel(images);
  
 
  return (
    <div className="block-first-photo">
          <p className="text-photos-ms">
            <i>
            Transforme suas memórias em 
            <br /> tesouros
            eternos.
            </i>
          </p>
          <p className="text-block-ms-1">
          Uma fotografia é mais do que um registro – ela captura sua essência, 
          <br />
          sua história e sua personalidade em um instante único. Com anos de experiência, aprendi 
          <br />
          que conexões genuínas são o que transformam momentos em memórias inesquecíveis.
          <br />
           Meu objetivo é transmitir essa autenticidade em cada imagem, criando confiança, demonstrando 
           <br />
           expertise e guiando você com acolhimento, do primeiro contato até o 
           <br />
           entusiasmado 'quero agendar minha sessão'.
          </p>
          <p className="text-block-ms-m">
          Registros únicos – criados por quem entende
          <br />
           a sua visão e a mensagem que deseja
           <br />
            transmitir em cada foto.
          </p>

          <p className="text-title-ms">Minha promessa para você</p>
          <div className="black-block-first-photo-1">
          <div className="wedding-container-cols">
      <div className="wedding-col-1"></div>
      <div className="wedding-col-2"></div>
      <div className="wedding-col-3"></div>
    </div>
          </div>
          <div className="black-block-first-photo-2"></div>
          <div className="black-block-first-photo">
            <div className="text-block-ms-2">
              <i>
              SOMENTE SENTIMENTOS AUTÊNTICOS
              <br /> CAPTURADOS DOS SEUS MOMENTOS
              <br /> ESPECIAIS
              </i>
            </div>
          </div>
          <div className="arrow-icon" id="steps"></div>

          <div
            className="first-photo  w-full h-full bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >

          </div>
            <div className="container-arrows">
          <div className="arrow-left-button " onClick={prevImage}></div>
          <div className="arrow-right-button " onClick={nextImage}></div>
          </div>
          <p className="text-white-block-ms-1">
            <i>SUA EXPERIÊNCIA</i>
          </p>
          <p className="subtitle-ms-1">é o que mais tem valor para mim</p>
          <p className="steps-1 ">Primeiro passo</p>
          <p className="steps-2 ">Segundo passo</p>
          <p className="steps-4 ">Terceiro passo</p>
          <div className="white-block-ms-sub"></div>
          <div className="initial-3-block-2"></div>

          <div className="initial-3-block"></div>

          <div className="white-block-ms-cols">
            <div className="white-block-ms-1">
              <p className="title-become-friends">
                {" "}
                <i>Nos tornando amigos</i>
              </p>
              <p className="text-become-friends">
              Cada sessão é uma oportunidade de nos conhecermos melhor, 
              criando uma conexão verdadeira e transformando momentos 
              especiais em memórias que duram para sempre.
              </p>
            </div>
            <div className="white-block-ms-1">
              <p className="title-planning-all-details">
                <i>Planejando os detalhes</i>
              </p>
              <p className="text-planning-all-details">
              Antes de cada clique, vamos conversar sobre suas ideias e desejos,
               garantindo que cada detalhe seja cuidadosamente pensado para 
               capturar sua visão da maneira mais autêntica possível.
              </p>
            </div>

            <div className="white-block-ms-1">
              <p className="title-delivery-time">
                <i>Momento da entrega!</i>
              </p>
              <p className="text-delivery-time">
              Após a sessão, chega o momento de compartilhar o 
              resultado do nosso trabalho conjunto. Cada imagem 
              será entregue com carinho, prontas para serem guardadas e revividas sempre que desejar.
              </p>
            </div>
          </div>

          <p className="text-photos-ms-m-title">
          Suas fotos devem ir além da estética, precisam contar uma história.
          </p>
          <p className="text-photos-ms-m-subtitle">
          Convido você a explorar minha visão fotográfica, onde 
          
          cada clique 
          <br />
          cria momentos genuínos e conexões reais.
          </p>

          <div className="vertical-square-1"></div>
          <div className="horizontal-line-first-photo-2"></div>
        </div>
  );
}

export default ExperienceBlock;
