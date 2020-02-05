import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Pages from "./routes/Pages";
import { checkAuthentication } from "./redux/actions/current";
import { ICurrent } from "./types";

interface IProps {
  checkAuthenticationConnect: () => void;
  isAuthenticated: boolean | null;
}

const App = ({ checkAuthenticationConnect, isAuthenticated }: IProps) => {
  useEffect(() => {
    checkAuthenticationConnect();
  }, []);

  const app =
    isAuthenticated !== null ? (
      <Router history={history}>
        <Route component={Pages} />
      </Router>
    ) : null;

  return <div className="App">{app}</div>;
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
  checkAuthenticationConnect: checkAuthentication
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
