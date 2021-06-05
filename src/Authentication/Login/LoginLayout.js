import React from "react";
import "./login.css";
function LoginLayout() {
  return (
    <div className="container">
      <div className="login-box">
        <p>Sign in</p>
        <form className="login-form">
          {/* <label htmlFor="firstName"> first name</label><br />
                <input type="input" id="firstName" name="firstName" />
                <br/>
                <label htmlFor="lastName"> last name</label><br />
                <input type="input" id="lastName" name="lastName" /> */}
          <br />
          <div>
            {/* <div className="login-form__label_container">
              <label className="login-form__label" htmlFor="email">
                email:
              </label>
              <br />
            </div> */}

            <div className="login-form__input_container">
              <input
                className="login-form__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <br />
          <div>
            {/* <div className="login-form__label_container">
              <label className="login-form__label" htmlFor="password">
                password:
              </label>
              <br />
            </div> */}

            <div className="login-form__input_container">
              <input
                className="login-form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="login-form__login_button_container">
            <button className="login-form__login_button">Login</button>
          </div>
        </form>
          <div className="resetPasswordAndRegisterContainer">
            <a className="resetPassword_Link" href='/'>Reset password</a>
            <a className="register_Link" href="/register">Register</a>
          </div>
      </div>
    </div>
  );
}

export default LoginLayout;
