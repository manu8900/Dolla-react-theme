import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages";
import SigninPage from "./Pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
