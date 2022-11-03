import React from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};

export const withRouter = (Component) => {
  let RouterComponent = (props) => {
    const match = useMatch("/profile/:userId/");
    const params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    return (
      <Component
        {...props}
        match={match}
        router={{ params, location, navigate }}
      />
    );
  };
  return RouterComponent;
};
