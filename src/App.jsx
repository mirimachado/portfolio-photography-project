import React from "react";

import "../src/frontend/main-styles/styles/App.css";
import "../src/frontend/main-styles/styles/Header.css";
import "../src/frontend/main-styles/styles/Footer.css";
import "../src/frontend/main-styles/styles/ProfileServices.css";
import "../src/frontend/main-styles/styles/AboutSpace.css";
import "../src/frontend/main-styles/styles/FoodsSpace.css";
import "../src/frontend/main-styles/styles/VideoSpace.css";
import "../src/frontend/main-styles/styles/ExperienceBlock.css";
import "../src/frontend/main-styles/styles/WeddingSpace.css";
import "../src/frontend/main-styles/styles/ProfessionalSpace.css";
import "../src/frontend/main-styles/styles/NavSpace.css";
import "../src/frontend/main-styles/styles/AlertBox.css";

import HeaderFirst from "../src/frontend/components/HeaderFirst";
import VideoSpace from "./frontend/components/VideoSpace";
import AboutSpace from "./frontend/components/AboutSpace";
import FooterSpace from "./frontend/components/FooterSpace";
import WeddingSpace from "./frontend/components/WeddingSpace";
import ContactService from "./frontend/components/ContactService";
import FoodsSpace from "./frontend/components/FoodsSpace";
import ExperienceBlock from "./frontend/components/ExperienceBlock";
import ProfessionalSpace from "./frontend/components/ProfessionalSpace";
import NavSpace from "./frontend/components/NavSpace";


import { useForm } from "../src/frontend/components/UseForm";
import { useIntersectionObserver } from "../src/frontend/components/UseIntersectionObserver";

function App() {
  const { formData, handleChange, handleSubmit, errors } = useForm();

  useIntersectionObserver();

  return (

    <div className="initial-body">
      <div className="header">
        <HeaderFirst />
       <NavSpace />
        <section id="initial-home"></section>
        <div className="profile-photo"></div>
        <p className="title-text-name"> Conheça a sua fotógrafa</p>
        <div className="text-photographer">Photographer</div>
        <div className="text-name">C A M I L E S A N T I A G O</div>
        <p className="title-sub-text-name">
          {" "}
          <i>
            Eu estou aqui para capturar experiências 
            <br />
            de vida!
          </i>
        </p>

        <div className="profile-line"></div>
      </div>

      <VideoSpace />

      <div className="second-aboutme-space">
        <AboutSpace />
        <ExperienceBlock />
        <WeddingSpace />
        <ContactService />
        <div className="services-block-2"></div>
          

        <FoodsSpace />

          <ProfessionalSpace />
       
        <div className="footer-block-auto-1"></div>
        <FooterSpace
  handleSubmit={handleSubmit}
  handleChange={handleChange}
  formData={formData}
  errors={errors} // <-- Adicionando errors
/>

        <div className="footer-block-auto-3" id="contact">
          <div className="text-block-ms-11">
            © 2025 Miriã Machado de Camargo. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
