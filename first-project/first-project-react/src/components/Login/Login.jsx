import React from "react";
import { reduxForm } from "redux-form";
import { requaired } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", [requaired], "email or phone number")}
      {/* <Field
          component={Input}
          name={"email"}
          validate={[requaired]}
          placeholder={"email or phone number"}
        /> */}
      {createField(Input, "password", [requaired], "password", {
        type: "password",
      })}
      {/* <div>
        <Field
          component={Input}
          name={"password"}
          validate={[requaired]}
          placeholder={"password"}
          type={"password"}
        />
      </div> */}
      {createField(
        Input,
        "rememberMe",
        [],
        null,
        { type: "checkbox" },
        "remember me"
      )}
      {/* <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div> */}
      {error && <div className={s.formSummeryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h2>login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
