import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));

 /**
   * Gets SSO redirect uri
   *
   * @return {string} redirect uri
   */
  const getRedirectUri = () => {
    return "https://env7-sso.caregility.net";
    // if (window.env_overrides.REACT_APP_SSO_REDIRECT_URL) {
    //   return "https://env7-sso.caregility.net";
    // }

    // if (process?.env?.REACT_APP_SSO_REDIRECT_URL) {
    //   return process.env.REACT_APP_SSO_REDIRECT_URL;
    // }

    // if (appConfig.REACT_APP_SSO_REDIRECT_URL) {
    //   return `${appConfig.REACT_APP_SSO_REDIRECT_URL}?redirect_uri=${encodeURI(window.location.href)}`;
    // }

    // return '';
  };

  //ACCESS_TOKEN_KEY=='';
  let accessToken = '';
  // let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  // if (typeof sessionToken === 'string' && typeof accessToken === 'object') {
  //   localStorage.setItem(ACCESS_TOKEN_KEY, sessionToken);
  //   accessToken = sessionToken;
  // }

  // if (!accessToken) {
    
  //   window.location.href = getRedirectUri();
  // }
  //  else if (newAccessToken) {
  //   localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
  // }

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()