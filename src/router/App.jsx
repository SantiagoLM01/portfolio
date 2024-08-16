import { useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contactame from "../pages/contactame/Contactame";
import Inicio from "../pages/inicio/Inicio";
import ProyectosPage from "../pages/proyectos/ProyectosPage";
import MainLayout from "../layout/mainLayout/MainLayout";

const App = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    const position = { x: window.scrollX, y: window.scrollY };
    if (position.y === 0) {
      scrollToTopArrow.current.classList.add("hide");
    } else {
      scrollToTopArrow.current.classList.remove("hide");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTopArrow = useRef(null);

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout></MainLayout>}>
          <Route path="inicio" element={<Inicio></Inicio>}></Route>
          <Route
            path="proyectos"
            element={<ProyectosPage></ProyectosPage>}
          ></Route>
          <Route path="contactame" element={<Contactame></Contactame>}></Route>
          <Route
            path="/**"
            element={<Navigate to={"/inicio"}></Navigate>}
          ></Route>
        </Route>
      </Routes>

      <div
        ref={scrollToTopArrow}
        onClick={scrollToTop}
        className="scrolltop hide"
      >
        <svg
          width={30}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
        </svg>
      </div>
    </>
  );
};

export default App;
