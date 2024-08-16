import { useState } from "react";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./Formulario.css";

const Formulario = () => {
  const [t, i18n] = useTranslation("global");
  const { nombre, tema, mensaje, formState, onInputChange, onResetForm } =
    useForm();
  const [alerta, setAlerta] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((nombre && mensaje && tema) === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 5000);
      return;
    }
    emailjs
      .sendForm(
        "service_czsff5e",
        "template_svdcw42",
        e.target,
        "W8O9-74KlBhHY3bxF"
      )
      .catch((error) => console.log(error));
    Swal.fire({
      position: "center",
      icon: "success",
      title: t("contact.contactSuccess"),
      showConfirmButton: false,
      timer: 1500,
    });
    onResetForm();
  };

  return (
    <>
      <div className="contenedor">
        <h1 className="contactame-titulo">{t("contact.contactTitle")}</h1>
        <div className="form-grid">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">{t("contact.nameLabel")}</label>
            <input
              type="text"
              id="fname"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              placeholder={t("contact.namePlaceholder")}
            />
            <label htmlFor="lname">{t("contact.themeLabel")}</label>
            <input
              type="text"
              id="lname"
              name="tema"
              value={tema}
              onChange={onInputChange}
              placeholder={t("contact.themePlaceholder")}
            />
            <label htmlFor="subject">{t("contact.messageLabel")}</label>
            <textarea
              id="subject"
              name="mensaje"
              value={mensaje}
              onChange={onInputChange}
              placeholder={t("contact.messagePlaceholder")}
            ></textarea>
            {alerta && <p className="alerta">{t("contact.contactError")}</p>}
            <input
              className="boton-proyecto"
              type="submit"
              value={t("miscellaneous.send")}
            />
          </form>
          <div className="form-imagen">
            <picture>
              <source srcSet="../../imgs/webp/email.webp" type="image/webp" />
              <img src="../../imgs/normal/email.PNG" alt="Imagen" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
