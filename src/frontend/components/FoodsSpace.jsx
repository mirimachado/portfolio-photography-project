import React, { useState, useEffect } from "react";
import photo10 from "../../assets/image-10.jpg";
import photo8 from "../../assets/photo-8.jpg";
import { useCarousel } from "./UseCarousel";


function FoodsSpace() {
      const images3 = [photo10, photo8];
        const { currentIndex: currentIndex3, nextImage: nextImage3, prevImage: prevImage3 } = useCarousel(images3);

    
  return (

    <div className="auto">
  
        <div className="f-black-block-auto">
       
          <div className="f-block-auto"> 
       
          </div>
          <div className="foods-black-block-first-photo">
          <div className="foods-text-block-ms-2">
            <i>
            NA FOTOGRAFIA, CADA ÂNGULO, 
            <br />CADA LUZ E CADA 
            
            COR TÊM UM PAPEL ESSENCIAL.
            </i>
          </div>
        </div>
         
        </div>
       
        <div className="block-final-aboutme-text">
          <p className="final-aboutme-text">
            {" "}
            Ser um fotógrafo é estar presente nas experiências únicas de cada cliente
          </p>
        </div>
        <div className="foods-block-auto">
          <div className="white-block-foods-photos"></div>
          <p className="text-block-ms-6">
            {" "}
            <i>Beleza na Apresentação, Cuidado nas Escolhas.</i>
          </p>
          <p className="foods-text-title-ms">ter uma perspectiva</p>

          <div className="food-initial-01"></div>

          <p className="final-aboutme-text-0-1">
            {" "}
            A fotografia vai além da imagem, ela revela a alma do momento e o sentimento por trás de cada clique.          </p>

          <p className="marks-3">" </p>
          <p className="marks-4">" </p>
          <div className="underlined-memories-2"></div>
          <div className="box-event-cols-block-4">
            <p className="text-box-event-1">CHEF'S & BOXCLUB</p>
            <p className="text-box-event-2">
              Eventos e experiências <br />
              para uma perfeita combinação.
            </p>
          </div>
          <div className="foods-container-cols">
            <div className="foods-col-1">
              <p className="text-food-1-am">
              Através das lentes, transformo sabores em imagens, capturando não apenas a beleza das cores e texturas, mas também a essência de cada criação.
              </p>
            </div>
            <div className="foods-col-2"></div>
            <div className="foods-col-3">
              <p className="text-food-1-am">
              Combinando sabores e estética, meu olhar transforma cada prato em uma expressão visual. A beleza de cada ingrediente é capturada de forma a celebrar a essência da culinária de maneira única e sofisticada.
              </p>
            </div>
          </div>

          <p className="text-block-ms-4-wf">
          Capturar a essência de um momento é mais do que uma  técnica; <br />é a arte de transformar emoções em lembranças. 
          </p>

          <div className="f2-block">
            <p className="text-food-2">
            Sabor em cada prato, <br /> a arte de servir com carinho. <br /> Momentos compartilhados, <br /> transformados em imagens que eternizam o prazer.
            </p>
          </div>
          <div
            className="foods-block-auto-3 "
            style={{ backgroundImage: `url(${images3[currentIndex3]})` }}
          ></div>
          <div className="arrow-left-button-foods " onClick={prevImage3}></div>
          <div className="arrow-right-button-foods " onClick={nextImage3}></div>
          <p className="text-block-ms-7">Celebrando a alegria de servir</p>
          <p className="text-block-ms-8">
          Cada prato tem uma narrativa única, com sabores que
            <br />
            despertam sensações e cada bebida carrega uma celebração.
            <br />
            Através da minha lente, busco capturar a simplicidade 
            <br />
            e o prazer de momentos compartilhados, transformando
            <br />
            cada gole em uma imagem que reflete a arte de bem servir.
            <br />
           
          </p>

          <div className="food-block"></div>
        </div>
        </div>
  );
}

export default FoodsSpace;
