import './styles/bootstrap.css';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';
import 'raf/polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';
import ScrollToTop from './components/ScrollToTop';
import App from "./scenes/App";

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
), document.getElementById("root"));
