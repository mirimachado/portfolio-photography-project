import React, { useState, useEffect } from "react";

function AboutSpace() {
  return (
    
    <div className="aboutme-space">
      <section id="aboutme">
      <div className="vertical-square-photographer"></div>
      <div className="aboutme-photo">
    
      </div>
      <div className="text-photographer-2">The Photographer</div>
      </section>
      <div className="horizontal-line-photographer-2"></div>
      
        <p className="aboutme-text">
          {" "}
          Sobre mim
          <br />
          <br />
          Oi, eu sou Camile Machado Santiago, fotógrafa e apaixonada por
          registrar momentos reais e cheios de significado.
          <br />
          Gosto de transformar histórias em imagens que falem por si só, com
          leveza e naturalidade.
          <br />
          Meu trabalho é mais sobre pessoas e sentimentos do que sobre
          <br />
          poses perfeitas, é captar o que realmente importa pra você e eternizar
          isso.
        </p>
     
      <button className="contact-button">
        {" "}
        <a
          className="a-button-contactme"
          href="https://api.whatsapp.com/send/?phone=5547984318495&text&type=phone_number&app_absent=0"
        >
          ENTRE EM CONTATO
        </a>
      </button>
    </div>
  );
}

export default AboutSpace;
