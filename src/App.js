import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import VisitGallery from "./pages/gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/gallery" component={VisitGallery} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
