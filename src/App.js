import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing"
import Personal from "./pages/Personal"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={"/personal"} component={Personal} />
        <Route component={Landing} />
      </Switch>
    </div>
  </Router>
);

export default App;