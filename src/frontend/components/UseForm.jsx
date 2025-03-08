import { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(""); // Adicionando estado para capturar erro

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (value === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      } else if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "E-mail inválido! Certifique-se de que o e-mail tem um domínio válido.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      const response = await fetch(
        process.env.NODE_ENV === "production"
          ? "https://servidor-d2zh6y5dk-mirias-projects-84c4120f.vercel.app/send-email"
          : "http://localhost:5005/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      
      

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData({ email: "", name: "", message: "" }); // Limpa o formulário
        setIsSubmitted(true); // Sucesso no envio
        setSubmitError(""); // Limpa o erro caso tenha
      } else {
        setIsSubmitted(false);
        setSubmitError(data.error || "Erro desconhecido"); // Define o erro
      }
    } catch (error) {
      setFormData({ email: "", name: "", message: "" });
     
      console.error(error);
      setIsSubmitted(false); // Não envia a mensagem de sucesso em caso de erro
      setSubmitError("Erro ao conectar ao servidor.");
    }

    // Resetando o estado após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setSubmitError(""); // Limpa o erro
    }, 3000);
  };

  return { formData, errors, handleChange, handleSubmit, isSubmitted, submitError };
};

export { useForm };
