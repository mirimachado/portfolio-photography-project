import React, { useState, useEffect } from "react";
import photo5 from "../../assets/yas.png";
import photo6 from "../../assets/yas-2.png";
import photo7 from "../../assets/yas-3.png";

import { useCarousel } from "./UseCarousel";

function ProfessionalSpace() {
  const images2 = [photo5, photo6, photo7];
  const {
    currentIndex: currentIndex2,
    nextImage: nextImage2,
    prevImage: prevImage2,
  } = useCarousel(images2);

  return (
    <div className="professional-block-auto">
      <div className="professional-black-block-first-photo">
        <div className="professional-text-title-ms">visão corporativa</div>
        <div className="professional-text-block-ms-2">
          <i>
            REGISTRANDO OS 
            <br />
           VALORES E A ESSÊNCIA DO SEU
            <br />
            NEGÓCIO
          </i>
        </div>
      </div>
      <div className="professional-black-block-auto">
        <div className="professional-block-auto-a"></div>
      </div>
      <div className="block-final-aboutme-text">
        <p className="final-aboutme-text">
          {" "}
          Cada foto é uma representação fiel do seu trabalho, destacando os valores e a visão da sua empresa. 
        </p>
      </div>

      <div className="white-block-professional-photos"></div>
      <p className="text-block-ms-12">
        {" "}
        Refletir excelência e sofisticação profissional.
      </p>
      <p className="final-aboutme-text-0">
        {" "}
         A verdadeira essência do seu negócio.
      </p>
      <div className="professional-initial-01"></div>

      <div className="underlined-memories-3"></div>
      <p className="marks-5">" </p>
      <p className="marks-6">" </p>
      <div className="professional-container-cols">
        <div className="box-event-cols-block-5">
          <p className="text-box-event-1-p">NEGÓCIOS &  EXPERTISE </p>
          <p className="text-box-event-2-p">
           Registrando sua <br />
          autenticidade corporativa
            
          </p>
        </div>
        <div className="professional-col-1"></div>
        <div className="professional-col-2"></div>
        <div className="professional-col-3"></div>
      </div>
      <p className="text-block-ms-4-wp">
        Sou uma fotógrafa que realmente <br /> o seu negócio e suas mudanças.
      </p>

      <p className="text-block-ms-9">O seu profissionalismo e 
        <br />elegância</p>
      <p className="text-block-ms-10">
      Cada imagem conta uma história, cada detalhe é
        <br />
        capturado com precisão. Através da minha lente, transformo
        <br />
        a identidade e a visão da sua empresa em imagens que
        <br />
        refletem sua missão e valores. Mais do que fotografia, é a arte
        <br />
        de documentar a essência do seu negócio."
        <br />
      </p>
      <div
        className="professional-block-auto-3 w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images2[currentIndex2]})` }}
      >
        <div className="professional-2-block"></div>

        <p className="text-block-ms-14">
        Cada clique revela a essência do seu negócio, capturando
        <br /> não apenas a imagem, mas a visão 
        <br />
      e os objetivos do seu negócio.
        </p>
      </div>

      <div className="arrow-left-button-p " onClick={prevImage2}></div>
      <div className="arrow-right-button-p " onClick={nextImage2}></div>
      <div className="professional-block"></div>
      <div className="arrow-icon-2"></div>
      <div className="professional-3-block"></div>
    </div>
  );
}

export default ProfessionalSpace;
