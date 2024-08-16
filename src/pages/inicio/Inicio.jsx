import { useTranslation } from "react-i18next";
import Formulario from "../../components/formulario/Formulario";
import Proyectos from "../../components/proyectos/Proyectos";
import Reveal from "../../components/reveal/Reveal";
import "./Inicio.css";

const Inicio = () => {
  const [t, i18n] = useTranslation("global");

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "files/Curriculum-Santiago-Ivan-Lizarazo-Mikly-(Resume).pdf"; // Replace with the path to your file
    link.download = "Santiago-Lizarazo-CV.pdf"; // Replace with the desired filename of your file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="animate__animated animate__fadeIn div-outlet">
        <div className="blob-animation">
          <div className="contenedor">
            <div className="grid-imagen-informacion">
              <div className="div-imagen-santi animate__animated animate__fadeInLeft">
                <picture>
                  <source
                    srcSet="imgs/webp/fotoPrincipal.webp"
                    type="image/webp"
                  />
                  <img
                    src="imgs/normal/fotoPrincipal.png"
                    alt="Imagen"
                    className="imagen-santi"
                  />
                </picture>
              </div>
              <div className="informacion-santi">
                <h1 className="saludo">{t("header.greeting")}</h1>
                <h1> {t("header.my-name-is")}</h1>
                <h1 className="typewriter nombre">{t("header.name")}</h1>
                <p>
                  {t("header.passion")}
                </p>
                <p>{t("header.origin")}</p>
                <p>{t("header.learning-goal")}</p>
                <p>{t("header.certifications-projects")}</p>
                <p>{t("header.current-studies")}</p>
              </div>
            </div>
            <div className="div-boton-cv">
              <button onClick={downloadFile}>
                {t("miscellaneous.cv")}{" "}
                <picture>
                  <source srcSet="imgs/webp/file.webp" type="image/webp" />
                  <img
                    className="imagen-archivo"
                    src="imgs/normal/file.png"
                    alt="Imagen Archivo"
                  />
                </picture>
              </button>
            </div>
          </div>

          <div className="frase-bolas">
            <div className="imagen-frase"></div>
            <h1 className="frase1">{t("miscellaneous.passionPhrase")}</h1>

            <div className="imagen2-frase"></div>
          </div>
        </div>

        <div className="main-div-lenguajes">
          <div className=" div-lenguajes">
            <h2 className="lenguajes-titulo">{t("miscellaneous.skills")}</h2>
            <Reveal>
              <div className="lenguajes-svg">
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/javascript.svg"
                    alt="javascript imagen"
                  />
                  <h3>JavaScript ES6+</h3>
                </div>

                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/html5.svg"
                    alt="html5 imagen"
                  />
                  <h3>HTML5</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/css.svg"
                    alt="CSS imagen"
                  />
                  <h3>CSS</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/sass.svg"
                    alt="sass imagen"
                  />
                  <h3>SASS</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/react.svg"
                    alt="react imagen"
                  />
                  <h3>REACT</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/node.webp" type="image/webp" />
                    <img
                      style={{ width: "100px", height: "80px" }}
                      src="imgs/normal/node.png"
                      alt="node imagen"
                    />
                  </picture>
                  <h3>NodeJS</h3>
                </div>

                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/git.svg"
                    alt="git imagen"
                  />
                  <h3>Git</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/github.svg"
                    alt="github imagen"
                  />
                  <h3>GitHub</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src="imgs/svgs/typescript.svg"
                    alt="typscript imagen"
                  />

                  <h3>TypeScript</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/angular.webp" type="image/webp" />
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src="imgs/normal/angular.png"
                      alt="angular imagen"
                    />
                  </picture>

                  <h3>Angular</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/vue.webp" type="image/webp" />
                    <img
                      style={{ width: "100px", height: "80px" }}
                      src="imgs/normal/vue.png"
                      alt="vue imagen"
                    />
                  </picture>

                  <h3>Vue</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src="imgs/svgs/sqlserver.svg"
                    alt="sql server imagen"
                  />

                  <h3>SQL Sever</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/mysql.webp" type="image/webp" />
                    <img
                      style={{ width: "120px", height: "80px" }}
                      src="imgs/normal/mysql.png"
                      alt="mysql imagen"
                    />
                  </picture>

                  <h3>MYSQL</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/mongodb.webp" type="image/webp" />
                    <img
                      style={{ width: "100px", height: "80px" }}
                      src="imgs/normal/mongodb.png"
                      alt="mongodb imagen"
                    />
                  </picture>

                  <h3>MongoDB</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src="imgs/svgs/csharp.svg"
                    alt="sql server imagen"
                  />

                  <h3>C#</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src="imgs/svgs/dot-net-core-7.svg"
                    alt="ASP NET imagen"
                  />

                  <h3>.NET</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/C.webp" type="image/webp" />
                    <img
                      style={{ width: "90px", height: "80px" }}
                      src="imgs/normal/C.png"
                      alt="C imagen"
                    />
                  </picture>

                  <h3>C</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/C++.webp" type="image/webp" />
                    <img
                      style={{ width: "90px", height: "80px" }}
                      src="imgs/normal/C++.png"
                      alt="C++ imagen"
                    />
                  </picture>

                  <h3>C++</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/python.webp" type="image/webp" />
                    <img
                      style={{ width: "90px", height: "80px" }}
                      src="imgs/normal/python.png"
                      alt="python imagen"
                    />
                  </picture>

                  <h3>Python</h3>
                </div>
                <div className="lenguaje">
                  <picture>
                    <source srcSet="imgs/webp/aws.webp" type="image/webp" />
                    <img
                      style={{ width: "90px", height: "80px" }}
                      src="imgs/normal/aws.png"
                      alt="aws imagen"
                    />
                  </picture>

                  <h3>AWS</h3>
                </div>
                <div className="lenguaje">
                  <img
                    style={{ width: "90px", height: "80px" }}
                    src="imgs/svgs/azure.svg"
                    alt="azure imagen"
                  />
                  <h3>Azure</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <Proyectos></Proyectos>
        </Reveal>
        <Reveal>
          <Formulario></Formulario>
        </Reveal>
      </main>
    </>
  );
};

export default Inicio;
