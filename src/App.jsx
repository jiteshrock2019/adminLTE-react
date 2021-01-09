import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "bootstrap";

import "../node_modules/bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "../node_modules/popper.js";

import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Contact from "./Contact";
import MathJax from "./MathJax";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div class="wrapper">
        <Header />
        <Menu />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/math" component={MathJax} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
