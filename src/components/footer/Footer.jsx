import { useTranslation } from "react-i18next";
import "./Footer.css";
const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="div-footer">
        <div className="col1">
          <p className="p-footer">
            {" "}
            {t("miscellaneous.email")} :{" "}
            <span>santilizarazo2001@hotmail.com</span>
          </p>
          <p className="p-footer">
            {t("miscellaneous.phone")}: <span>(+506) 8313-1714</span>
          </p>
        </div>
        <div className="col2">
          <p className="p-footer">
            {" "}
            Linkedin:
            <a
              className="p-footer"
              href="https://www.linkedin.com/in/santiago-lizarazo-mikly-6523121b9"
              target="_blank"
            >
              {" "}
              https://www.linkedin.com/in/santiago-lizarazo-mikly-6523121b9
            </a>
          </p>
          <p className="p-footer">
            GitHub:{" "}
            <a className="p-footer" href="https://github.com/SantiagoLM01" target="_blank">
              https://github.com/SantiagoLM01
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
