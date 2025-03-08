import { useState } from "react";

export function useFormService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [messageType, setMessageType] = useState(""); // success ou error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setFeedbackMessage("O campo de e-mail é obrigatório!");
      setMessageType("error");
      setTimeout(() => setFeedbackMessage(null), 3000);
      return;
    }

    try {
      const response = await fetch("http://localhost:5005/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFeedbackMessage("Mensagem enviada com sucesso!");
        setMessageType("success");
        setFormData({ name: "", email: "", message: "" });

      } else {
        setFeedbackMessage("Erro ao enviar mensagem!");
        setMessageType("error");
      }

    } catch (error) {
      console.error("Erro ao enviar:", error);
      setFeedbackMessage("Erro ao conectar com o servidor!");
      setMessageType("error");
    }

    // Remover mensagem após 3 segundos
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  return { formData, handleChange, handleSubmit, feedbackMessage, messageType };
}
