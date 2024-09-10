import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MVN Logo
import mvnu_logo from "./Assets/mvnu-logo.png"

// Connects style sheet
import "./LoginSignup.css";

// Used to toggle language
import "../../i18n";
import { useTranslation } from "react-i18next";

// Language icon
import { ReactComponent as LangIcon } from "./Assets/icon.svg";

const LoginSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const { t, i18n } = useTranslation("LoginSignup");
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hn" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='row vh-100 g-0'>

      {/* Left Side */}
      <div className='col-lg-6 position-relative d-none d-lg-block'>
        <div className='bg-holder'></div>
      </div>

      {/* Right Side */}
      <div className='col-lg-6 d-flex flex-column justify-content-center'>

        {/* Language Toggle */}
        <div className="d-flex justify-content-end">
          <button className='btn btn-outline btn-lg w-30 language mt-2 me-2' onClick={toggleLanguage}>
            <LangIcon className="icon" />
            {language === "en" ? "हिन्दी" : "English"}
          </button>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center h-100 px-4 px-sm-0'>
          <div className='col col-sm-6 col-lg-7 col-xl-6'>

            {/* Logo */}
            <a href="#" className='d-flex justify-content-center mb-4'>
              <img src={mvnu_logo} alt="" width="60" />
            </a>

            <div className='text-center mb-5'>
              <h3 className='fw-bold'>{t("heading-2")}</h3>
              <p className='text-secondary'>{t("accounts-2")}</p>
            </div>

            {/* Social Login */}
            <button className='btn btn-lg btn-outline-secondary btn-outline-custom btn-lg w-100'>
              <i className='bx bxl-google text-danger me-1 fs-6'></i> {t("google-login-2")}
            </button>

            {/* Divider */}
            <div className='position-relative'>
              <hr className='text-secondary' />
              <div className='divider-content-center'>{t("divider-2")}</div>
            </div>

            {/* Form */}
            <form action="#">
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='bx bx-user'></i>
                </span>
                <input type="text" className='form-control form-control-lg fs-6' placeholder={t("username-2")} />
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='bx bx-envelope'></i>
                </span>
                <input type="email" className='form-control form-control-lg fs-6' placeholder={t("email-2")} />
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='bx bx-lock-alt'></i>
                </span>
                <input type={showPassword ? 'text' : 'password'} className='form-control form-control-lg fs-6' placeholder={t("password-2")} />
                <button type='button' className='btn btn-outline-custom' onClick={togglePasswordVisibility}>
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className='bx bx-lock-alt'></i>
                </span>
                <input type={showConfirmPassword ? 'text' : 'password'} className='form-control form-control-lg fs-6' placeholder={t("confirm-pass-2")} />
                <button type='button' className='btn btn-outline-custom' onClick={toggleConfirmPasswordVisibility}>
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              <div className='input-group mb-3 d-flex justify-content-between'>
                <div className='form-check'>
                  <input type="checkbox" className='form-check-input' id='formCheck' />
                  <label htmlFor="formCheck" className='form-check-label text-secondary'>
                    <small>{t("terms-2")}</small>
                  </label>
                </div>
              </div>
              <button className='btn btn-primary btn-lg w-100 mb-3'>{t("signup-button-2")}</button>
            </form>

            <div className='text-center'>
              <small>{t("account-info-2")} <Link to="/login" className='fw-bold'>{t("login-button-2")}</Link></small>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
