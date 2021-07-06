import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
function LoginLayout() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: (values) => {
      console.log("LOGIN", values);
    },
  });

  return (
    <div className="container">
      <div className="login-box">
        <p>Sign in</p>
        <form onSubmit={formik.handleSubmit} className="login-form">
          <div>
            <div className="login-form__input_container">
              <input
                className="login-form__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="login-form__input_error_message_container">
                  <div className="login-form__input_error_message">
                    {formik.errors.email}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <br />
          <div>
            <div className="login-form__input_container">
              <input
                className="login-form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="login-form__input_error_message_container">
                  <div className="login-form__input_error_message">
                    {formik.errors.password}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="login-form__login_button_container">
            <button className="login-form__login_button">Login</button>
          </div>
        </form>
        <div className="resetPasswordAndRegisterContainer">
          {/* <a className="resetPassword_Link" href="/">
            Reset password
          </a> */}
          <Link className="register_Link" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
