import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.css";
import { Link } from "react-router-dom";

function RegisterLayout() {
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      // lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      // firstName: Yup.string().required("required"),
      // lastName: Yup.string().required("required"),
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string()
        .required("required")
        .min(6, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => {
      console.log("user data:", values);
    },
  });

  return (
    <div className="container">
      <div className="register-box">
        <p>Register</p>
        <form onSubmit={formik.handleSubmit} className="register-form">
          {/* <div>
            <div className="register-form__input_container">
              <input
                className="register-form__input"
                type="input"
                id="firstName"
                placeholder="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="register-form__input_error_message_container">
                  <div className="register-form__input_error_message">
                    {formik.errors.firstName}
                  </div>
                </div>
              ) : null}
            </div>
          </div> */}
          {/* <br /> */}
          {/* <div>
            <div className="register-form__input_container">
              <input
                className="register-form__input"
                type="input"
                id="lastName"
                placeholder="Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="register-form__input_error_message_container">
                  <div className="register-form__input_error_message">
                    {formik.errors.lastName}
                  </div>
                </div>
              ) : null}
            </div>
          </div> */}

          {/* <br /> */}
          <div>
            <div className="register-form__input_container">
              <input
                className="register-form__input"
                type="email"
                id="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="register-form__input_error_message_container">
                  <div className="register-form__input_error_message">
                    {formik.errors.email}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <br />
          <div>
            {/* <div className="register-form__label_container">
                <label className="register-form__label" htmlFor="password">
                  password:
                </label>
                <br />
              </div> */}

            <div className="register-form__input_container">
              <input
                className="register-form__input"
                type="password"
                id="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="register-form__input_error_message_container">
                  <div className="register-form__input_error_message">
                    {formik.errors.password}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="register-form__register_button_container">
            <button type="submit" className="register-form__register_button">
              Register
            </button>
          </div>
        </form>
        <div className="loginLinkContainer">
          <Link className="login_Link" to="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;
