import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);

  const [collapseLanguageOption, setCollapseLanguageOption] = useState(true);

  const [t, i18n] = useTranslation("global");

  const navBurger = useRef(null);

  const header = useRef(null);

  const languageList = useRef(null);

  const handleScroll = () => {
    const position = { x: window.scrollX, y: window.scrollY };
    if (position.y === 0) {
      header.current.classList.remove("cambiarColor-Header");
      setOpenedBurgerMenu(false);
      setCollapseLanguageOption(true);
    } else if (!header.current.classList.contains("cambiarColor-Header")) {
      header.current.classList.add("cambiarColor-Header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerMenu = () => {
    setOpenedBurgerMenu(!openedBurgerMenu);
    setCollapseLanguageOption(true);
  };

  const openLanguageOptions = () => {
    if (navBurger.current.classList.contains("show")) {
      setOpenedBurgerMenu(false);
    }
    setCollapseLanguageOption(!collapseLanguageOption);
  };

  return (
    <>
      <div className="main-div-nav" ref={header}>
        <header className="header-nav">
          <div>
            <Link to={"/inicio"}>
              <picture>
                <source
                  srcSet="../../imgs/webp/logoSanti.webp"
                  type="image/webp"
                />
                <img
                  className="logo-santi"
                  src="../../imgs/normal/logoSanti.png"
                  alt="Logo"
                />
              </picture>
            </Link>
          </div>
          <div className="div-navegacion-header">
            <div onClick={handleBurgerMenu} className="div-burgermenu">
              <button className="burger-menu">
                <div
                  id="line1"
                  className={`line ${openedBurgerMenu ? "rotate1" : ""}`}
                ></div>
                <div
                  id="line2"
                  className={`line ${openedBurgerMenu ? "hide" : ""}`}
                ></div>
                <div
                  id="line3"
                  className={`line ${openedBurgerMenu ? "rotate3" : ""}`}
                ></div>
              </button>
            </div>

            <nav
              ref={navBurger}
              className={`nav-header ${openedBurgerMenu ? "show" : ""}`}
            >
              <div className="div-enlace-header">
                <NavLink
                  onClick={() => setOpenedBurgerMenu((value) => !value)}
                  to={"/inicio"}
                  className={({ isActive }) =>
                    isActive
                      ? "link-nav-margin link-nav nav-active"
                      : "link-nav-margin link-nav"
                  }
                >
                  {t("header.navStart")}
                </NavLink>
              </div>
              <div className="div-enlace-header">
                <NavLink
                  onClick={() => setOpenedBurgerMenu((value) => !value)}
                  to={"/proyectos"}
                  className={({ isActive }) =>
                    isActive
                      ? "link-nav-margin link-nav nav-active"
                      : "link-nav-margin link-nav"
                  }
                >
                  {t("header.navProjects")}
                </NavLink>
              </div>
              <div className="div-enlace-header">
                <NavLink
                  onClick={() => setOpenedBurgerMenu((value) => !value)}
                  to={"/contactame"}
                  className={({ isActive }) =>
                    isActive ? " link-nav nav-active" : " link-nav"
                  }
                >
                  {t("header.navContact")}
                </NavLink>
              </div>
            </nav>
            <div className="language-div">
              <button onClick={openLanguageOptions} className="button-language">
                {t("languages.language")} : {currentLanguage}{" "}
              </button>
              <ul ref={languageList} className="language-options">
                <li
                  className={`${collapseLanguageOption ? "collapse" : ""}`}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    openLanguageOptions();
                    setCurrentLanguage("EN");
                  }}
                >
                  {t("languages.english")} (EN)
                </li>
                <li
                  className={`${collapseLanguageOption ? "collapse" : ""}`}
                  onClick={() => {
                    i18n.changeLanguage("es");
                    openLanguageOptions();
                    setCurrentLanguage("ES");
                  }}
                >
                  {t("languages.spanish")} (ES)
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
