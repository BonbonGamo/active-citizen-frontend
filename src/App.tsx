import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import Navigation from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Route path="/" exact render={() => <FrontPage></FrontPage>} />
    </Router>
  );
}

export default App;
