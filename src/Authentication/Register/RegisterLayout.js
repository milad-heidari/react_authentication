import React from "react";
import {connect} from 'react-redux'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.css";
import { Link } from "react-router-dom";
import authActions from '../../Store/Authentication/authActions'
import P from '../../Components/Partials/P'
import Form from "../../Components/Partials/Form";
import Input from "../../Components/Partials/Input";
import Button from "../../Components/Partials/Button";

function RegisterLayout({userRegisterRequest}) {
  // let history = useHistory()
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
      // console.log("user data:", values);
      userRegisterRequest({...values})
      
      // history.push('/login')
    },
  });

  return (
    <div className="container">
      <div className="register-box">
        {/* <p>Register</p> */}
        <P classes='' text='Register' />
        <Form onSubmit={formik.handleSubmit} classes="register-form">
          <div>
            <div className="register-form__input_container">
              <Input
                classes="register-form__input"
                type="email"
                id="email"
                placeholder="Email"
                formikGetFieldProps={formik.getFieldProps("email")}
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
          <br/>
          <div>
            <div className="register-form__input_container">
              <Input
                classes="register-form__input"
                type="password"
                id="password"
                placeholder="Password"
                formikGetFieldProps={formik.getFieldProps("password")}
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
            <Button 
              classes="register-form__register_button"
              type="submit"
              title="Register"
              />
          </div>
        </Form>
        <div className="loginLinkContainer">
          <Link className="login_Link" to="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapState = (state)=>{
  return{

  }
}

const mapDispatch = (dispatch)=>{
  return {
    userRegisterRequest:(payload)=>{
      dispatch({
        type:authActions.AUTH_REGISTER_USER,
        payload
      })
    }
  }
}

export default connect(mapState,mapDispatch)(RegisterLayout);
