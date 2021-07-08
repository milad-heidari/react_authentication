import React from "react";
import {connect} from 'react-redux'
import authActions from '../../Store/Authentication/authActions'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import P from '../../Components/Partials/P';
import Form from '../../Components/Partials/Form';
import Input from '../../Components/Partials/Input';
import Button from '../../Components/Partials/Button'
function LoginLayout({userLoginRequest}) {
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
      // console.log("LOGIN", values);
      userLoginRequest({...values})
    },
  });

  return (
    <div className="container">
      <div className="login-box">

        <P classes='' text='Sign in' />
        <Form onSubmit={formik.handleSubmit} classes="login-form">
          <div>
            <div className="login-form__input_container" >
              <Input
                classes='login-form__input'
                type='email'
                id='email'
                placeholder='Email'
                formikGetFieldProps={formik.getFieldProps('email')}
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
          <div className="login-form__input_container" >
              <Input
                classes='login-form__input'
                type='password'
                id='password'
                placeholder='Password'
                formikGetFieldProps={formik.getFieldProps('password')}
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
            <Button
              title="Login"
              type="submit"
              classes="login-form__login_button"
            />
          </div>
        </Form>
        
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


const mapState=(state)=>{
  return {

  }
}

const mapDispatch = (dispatch)=>{
  return {
    userLoginRequest:(payload)=>{
      dispatch({
        type:authActions.AUTH_LOGIN_USER,
        payload
      })
    }
  }
}

export default connect(mapState,mapDispatch)(LoginLayout);
