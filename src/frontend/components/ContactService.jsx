import React, { useState, useEffect } from "react";

function ContactService() {
  return (
    <div className="services-block" id="services">
    <p className="text-service-title">
      <i>Serviços</i>
    </p>

    <div className="line-service-block"></div>
    <div className="service-block-white-cols">
      <p className="text-service-title-2">
        <i>Escolha sua EXPERIÊNCIA</i>
      </p>

      <div className="service-col-1">
        <p className="text-service">Corporativo</p>
        <p className="text-service-subs">
        Fotografia profissional para empresas que desejam fortalecer sua identidade visual. Retratos corporativos, fotos institucionais e registros de eventos empresariais que comunicam credibilidade e profissionalismo.
        </p>
      </div>
      <div className="service-col-1">
        <p className="text-service">Conceitural - editorial</p>
        <p className="text-service-subs">
        Imagens criativas e impactantes para projetos editoriais, ensaios artísticos e campanhas publicitárias. Cada clique é pensado para transmitir conceito, emoção e originalidade.
        </p>
      </div>
      <div className="service-col-1">
        <p className="text-service">E-commerce - events</p>
        <p className="text-service-subs">
        Fotografia comercial de alta qualidade para lojas online, garantindo imagens nítidas e atraentes para valorizar seus produtos. Cobertura fotográfica para eventos, capturando momentos especiais com um olhar autêntico e detalhista.
        </p>
      </div>
      <p className="text-service-title-3">
      Faça suas memórias mais amorosas 
      <br />durarem para sempre.
      </p>
    </div>
    <div className="services-block-photo"></div>
    <button className="button-service">
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

export default ContactService;
