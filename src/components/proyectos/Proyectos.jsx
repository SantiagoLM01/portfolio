import { useTranslation } from "react-i18next";
import { proyectos } from "../../helpers/getProyectos";
import "./Proyectos.css";

const Proyectos = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="contenedor">
      <section className="main-proyectos">
        <h1 className="proyectos-titulo">{t("projects.projectsTitle")}</h1>
        <div className=" proyectos">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto">
              <picture>
                <source srcSet={proyecto.imagenWebp} type="image/webp" />
                <img
                  width={"100%"}
                  height={"240"}
                  src={proyecto.imagen}
                  alt="Proyecto"
                />
              </picture>
              <h3>{proyecto.titulo}</h3>
              <p className="parrafo-proyecto">{t(proyecto.descripcion)}</p>
              <a target="_blank" href={`${proyecto.link}`}>
                <button className="boton-proyecto">
                  {t("miscellaneous.seeProject")}
                </button>
              </a>
              <a target="_blank" href={`${proyecto.github}`}>
                <button className="boton-proyecto">
                  {t("miscellaneous.seeGithub")}
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
