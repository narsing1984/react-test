import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/pages/login";
import TokenAuthentication from "../components/pages/tokenauthentication";
import NotFound from "../components/pages/notfound";
import Territories from "../components/pages/territories";
import HCPSelection from "../components/pages/hcpselection";
import MessageSelection from "../components/pages/messageselection";
import Plans from "../components/pages/plans";
import PrintPreview from "../components/pages/printpreview";

import LoggedInRoute from "../routes/LoggedInRoute";
import LoggedOutRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <LoggedOutRoute path="/" exact={true} component={Login} />
      <LoggedOutRoute
        path="/tokenauthenticate"
        exact={true}
        component={TokenAuthentication}
      />
      <LoggedInRoute path="/territories" exact={true} component={Territories} />
      <LoggedInRoute
        path="/territories/:id"
        exact={true}
        component={HCPSelection}
      />
      <LoggedInRoute
        path="/messages"
        exact={true}
        component={MessageSelection}
      />
      <LoggedInRoute path="/plans" exact={true} component={Plans} />
      <LoggedInRoute path="/print" exact={true} component={PrintPreview} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
