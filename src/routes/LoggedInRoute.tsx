import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import history from "../history";
import { ICurrent } from "../types";
import Header from '../components/common/header';
import Footer from '../components/common/footer';

interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: IProps) => {
  if (isAuthenticated === false) {
    history.push("/");
    //alert("this is a logged in route, you are logged out, redirected to log in");
  }

  return (
    <>
      <Header />
      <Route
        render={otherProps => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps
)(LoggedInRoute);
