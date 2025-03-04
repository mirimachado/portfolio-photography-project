import React from "react";
import { useForm } from "../components/UseForm";  // Usando o hook de formulário

const FooterSpace = () => {
  const { formData, handleChange, handleSubmit, errors, isSubmitted, submitError } = useForm();

  return (
    <footer className="footer">
      <div className="footer-block-auto-1"></div>
      <div className="footer-block-auto-2">
        <p className="text-contact-footer-title">
          <i>ENTRE EM CONTATO AQUI!</i>
        </p>
        <p className="text-name-sub-footer-2">
        Cada clique é uma oportunidade de eternizar histórias e emoções 
        <br />
        únicas, capturando a beleza dos 
        <br /> momentos que definem nossa jornada.
        </p>

        <div className="contact-icons-footer">
          <a href="https://api.whatsapp.com/send/?phone=5547984318495&text&type=phone_number&app_absent=0">
            <div className="contact-icons-cols-1"></div>
          </a>
          <a href="https://br.pinterest.com/milifotografia/">
            <div className="contact-icons-cols-2"></div>
          </a>
          <a href="https://www.instagram.com/mili.fotografias_/">
            <div className="contact-icons-cols-3"></div>
          </a>
        </div>

        <div className="form-auto">


        {isSubmitted && !submitError && (
  <div className={`alert-box success`}>
    E-mail enviado com sucesso!
  </div>
)}

{submitError && (
  <div className={`alert-box error`}>
    {submitError}
  </div>
)}


    

          <form onSubmit={handleSubmit}>
            <div className="container-input">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="container-input">
              <label htmlFor="email">E-mail*:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="container-input">
              <label htmlFor="message">Mensagem:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {errors?.email && <p className="alert-email">{errors.email}</p>}

            <button className="contact-button-footer" type="submit">
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>

        <div className="auto">
          <div className="logo-image-footer"></div>
          <div className="auto-footer"></div>
          <p className="text-name-footer">Camile Santiago</p>
          <p className="text-name-sub-footer">
            Seja em um casamento, um ensaio íntimo ou uma grande aventura,
            <br />
            meu propósito está sempre em registrar os momentos
            <br />
            que fazem a vida especial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSpace;
