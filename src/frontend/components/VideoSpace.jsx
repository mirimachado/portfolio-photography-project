import React, { useState, useEffect } from 'react';

function VideoSpace(){
    return(
        <div className="black-block-video">
        
        <div className="white-block-video">
          
    <video loop autoPlay muted playsInline>
      <source src="video.mp4" type="video/mp4" />
    </video>
    <p className="title-text-name-video"> Minha visão como fotógrafa</p>
  
    <div className="overlay-text-1">
    Sua fotografia é sobre criar experiências, não apenas tirar fotos.      </div>
      <div className="overlay-text-2">
     <i> 
     Sua fotografia conta histórias que duram gerações. Sua experiência abrange tudo, desde o planejamento do figurino até o planejamento do cenário. Quando suas fotos realmente refletem o valor de toda a sua experiência, os clientes entram em contato já sabendo que encontraram exatamente o que estavam procurando.
     </i>
      </div>
      </div>
      <div className="block-final-aboutme-text">
  
  <p className='final-aboutme-text'> 
    capturando momentos únicos através das lentes
      </p>
      </div>
  </div>
);
}

export default VideoSpace;
