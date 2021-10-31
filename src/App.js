import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withFirebase } from "vtr-react-components/dist/Firebase";

import * as ROUTES from "./constants/routes";

import Landing from "./pages/Landing"
import Personal from "./pages/Personal"
import NotFound from "./pages/404"

const AppBase = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.PERSONAL} component={Personal} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

const App = withFirebase(AppBase);

export default App;
