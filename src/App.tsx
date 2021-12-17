import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageRender from "./PageRender";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import { Alert } from "./components/alert/Alert";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Alert />

        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
