import React, { useState } from "react";
import "./LoginSignup.css";
import { ReactComponent as LangIcon } from "./Assets/icon.svg";

import { useTranslation } from "react-i18next";
import "../../i18n";

function LoginSignup() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const { t, i18n } = useTranslation("LoginSignup");
  const [language, setLanguage] = useState("en");

  // Function to toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hn" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <div className="top-bar">
        <p>{t("top-heading")}</p>
        <div onClick={toggleLanguage} className="language">
          <LangIcon className="icon" />
          {language === "en" ? "हिन्दी" : "English"}
        </div>
      </div>

      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form action="#">
            <h1>{t("heading-1")}</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <span>{t("accounts-1")}</span>
            <input type="email" placeholder="Username / Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot">
              {t("forgot-text-1")}
            </a>
            <button>{t("button-1")}</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form action="#">
            <h1>{t("heading-2")}</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <span>{t("accounts-2")}</span>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
            <div className="pass">
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            {/* <input type="date" placeholder="Date of Birth (optional)" /> */}
            {/* <input type="text" placeholder="Program / Department of Interest" /> */}
            {/* <input type="text" placeholder="Current Status" /> */}
            {/* <input type="text" placeholder="How did you hear about us? (optional)" /> */}
            <div className="Terms-and-conditions">
              <label className="marketing">
                <input type="checkbox" /> {t("terms-1")}
              </label>
              <label className="terms">
                <input type="checkbox" /> {t("terms-2")}
              </label>
            </div>
            <button>{t("button-2")}</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>{t("overlay-heading-1")}</h1>
              <p>{t("overlay-text-1")}</p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(false)}
              >
                {t("overlay-button-1")}
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>
                {t("overlay-heading-2.1")} <br /> {t("overlay-heading-2.2")}
              </h1>
              <p className="message">{t("overlay-text-2")}</p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(true)}
              >
                {t("overlay-button-2")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
