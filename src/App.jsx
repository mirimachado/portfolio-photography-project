import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate'); 
  
    const observerOptions = {
      root: null, 
      threshold: 0.1, 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate')) {
            entry.target.classList.add('animate-visible');
          }
            observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="initial-body">
      <div className="header">
      
      <div className="header-first">
  <div className="header-group-1">
    <a href="#" className="header-infos">CONTACT</a>
    <div className="vertical-line-header"></div>
    <a href="https://www.instagram.com/mili.fotografias_/" className="header-infos">INSTAGRAM</a>
  </div>
  <div className="circle-logo"></div>
  <a href="#initial-home">

  <div className="logo-image"></div>
  </a>
  <div className="header-group-2">
    <a href="mailto:milifotografiabnu@gmail.com" className='header-infos'>E-MAIL</a>
    <div className="vertical-line-header"></div>
    <a href="#aboutme" className="header-infos">ABOUT ME</a>
  </div>
</div>

       <section id='initial-home'></section>
        <div className="profile-photo"></div>

        <div className="text-photographer">Photographer</div>
        <div className="text-name">C A M I L E S A N T I A G O</div>
        <div className="profile-line"></div>
      </div>
      <div className="black-block-video">
      <div className="white-block-video">
        
  <video loop autoPlay muted playsInline>
    <source src="video.mp4" type="video/mp4" />
  </video>
  <div className="overlay-text-1">
  Your photography is about creating experiences, not just taking photos.
    </div>
    <div className="overlay-text-2">
   <i> Your photography tells stories that last generations. Your experience includes everything from wardrobe planning to wall art design. When your photos truly reflects the value of your complete experience, clients reach out already knowing this is exactly what they've been searching for.
   </i>
    </div>
    </div>
</div>

      <div className="second-aboutme-space">
      <div className="news">
        <p className="news-text">Let's make that excitement your everyday reality!</p>
      </div>

        <div className="aboutme-space">
          <div className="vertical-square-photographer"></div>
          <div className="aboutme-photo"></div>
          <div className="text-photographer-2 animate">The Photographer</div>
          <div className="horizontal-line-photographer-2"></div>
               <section id='aboutme'>
            <p className="aboutme-text">
              {' '}
              <i>
              Sobre mim </i>
              <br />
              <br />
              <i>
              Oi, eu sou Camile Machado Santiago, fotógrafa e apaixonada por registrar momentos 
            
              reais e cheios de significado. 
               <br />
               Gosto de transformar histórias em imagens que falem por si só, com leveza e naturalidade. 
               <br />
               Meu trabalho é mais sobre pessoas e sentimentos do que sobre
               <br />
               poses perfeitas, é captar o que realmente importa pra você e eternizar isso.
               </i>
            </p>
            </section>
            <button className='contact-button'> <a  className='a-button-contactme' href="https://api.whatsapp.com/send/?phone=5547984318495&text&type=phone_number&app_absent=0">CONTACT ME HERE</a></button>
    
        </div>
        <div className="block-final-aboutme-text">

        <p className='final-aboutme-text'> <i>Being a photographer is not about getting the perfect picture.
            <br />
            It's about being there, celebrating real smiles, and 
            <br />
            creating moments  that will be treasure forever.
            </i>
            </p>
            <p className='final-aboutme-text-1'>IT'S NOT JUST ABOUT LOOKING "PRETTY."</p>
            </div>
        
        <div className="block-first-photo">
           <div className="text-photos-ms">
            <i>
            TURN YOUR 
            MEMORIES INTO 
            EVERLASTING 
            <br />
            TREASURES
             </i>
             </div>
             <div className="text-block-ms-1">A photograph is more than just a record; it captures your essence, 
             <br />
              your story, and your personality in a unique moment. </div>
              <p className="text-title-ms">My promise to you</p>
             <div className="black-block-first-photo">
             <div className="text-block-ms-2">
              <i>
              ONLY AUTHENTIC
              <br />
             FEELINGS CAPTURED FOR 
             <br />
             THE LOVING SOUL 
             </i>
             </div>
             </div>
             <div className="arrow-icon"></div>

           <div className="first-photo"></div>
           <div className="photo-1"></div>
           <div className="arrow-left-button"></div>
           <div className="arrow-right-button"></div>

           <div className="block-buttons-radius">

            <div className="buttons-radius-1"></div>
            <div className="buttons-radius-2"></div>
            <div className="buttons-radius-3"></div>

           </div>
                      <p className="text-white-block-ms-1"><i>YOUR EXPERIENCE</i></p>
           <p className='subtitle-ms-1'>is what i value the most</p>
           <p className="steps-1 animate">The first step</p>
           <p className="steps-2 animate">The second step</p>
           {/* <p className="steps-3 animate">The third step</p> */}
           <p className="steps-4 animate">The fourth step</p>


           <div className="white-block-ms-cols">
            <div className="white-block-ms-1">
              <p className='title-become-friends'> <i>Become friends</i></p>
              <p className="text-become-friends">Cotton candy jujubes candy canes gingerbread donut icing gingerbread chocolate bar bonbon. Pudding toffee sweet roll dessert gummies sweet danish oat cake pastry.</p>
            </div>
            <div className="white-block-ms-1">
              <p className="title-planning-all-details"><i>Planning all details</i></p>
              <p className="text-planning-all-details">Cotton candy jujubes candy canes gingerbread donut icing gingerbread chocolate bar bonbon. Pudding toffee sweet roll dessert gummies sweet danish oat cake pastry.</p>
            </div>
            <div className="white-block-ms-1">
              <p className="title-delivery-time"><i>Delivery time!</i></p>
              <p className="text-delivery-time">Cotton candy jujubes candy canes gingerbread donut icing gingerbread chocolate bar bonbon. Pudding toffee sweet roll dessert gummies sweet danish oat cake pastry.</p>
            </div>

           </div>
           <div className="vertical-square-1"></div>
        </div>
        <div className="wedding-black-block-auto">
        <div className="wedding-block-auto"></div>
        <div className="wedding-cols-block-4">
        <p className="text-ana-john-1">ANA & JOHN</p>
        <p className="text-ana-john-2">Pre-wedding full of <br />love and laughter</p>
        </div>

        <p className="text-block-ms-3"><i>Memories not only captured <br />in your heart</i></p>
        <p className="aspas">" </p>

          <div className="underlined-memories"></div>
 
        <div className="wedding-container-cols">

          <div className="wedding-col-1"></div>
          <div className="wedding-col-2"></div>
          <div className="wedding-col-3"></div>

        </div>
        </div>
       

        <div className="wedding-block-auto-2">
        <div className="wedding-block-auto-3"></div>
        <p className="text-block-ms-4">Moments with the ones you love <br /> most, artfully documented.</p>
         <p className="text-block-ms-5">Biscuit brownie powder cookie. Powder candy canes 
          <br />
          sweet roll soufflé macaroon pastry dessert. Croissant 
          <br />
          chocolate bar sweet roll soufflé gingerbread jelly beans. 
          <br />
          Lollipop bear claw bear claw lollipop jelly-o candy canes 
          <br />
          wafer cotton candy. Chupa chups caramels toffee 
          <br />
          caramels oat cake. Dragée sweet biscuit carrot cake 
          <br />
          chupa chups cookie marshmallow shortbread sugar plum.</p>
        </div>
        <div className="wedding-center">
        </div>

      </div>
    </div>
  );
}

export default App;
