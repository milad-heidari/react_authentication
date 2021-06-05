import React from 'react'
import './register.css'

function RegisterLayout() {
    return (
        <div className="container">
        <div className="register-box">
          <p>Register</p>
          <form className="register-form">
            {/* <label htmlFor="firstName"> first name</label><br />
                  <input type="input" id="firstName" name="firstName" />
                  <br/>
                  <label htmlFor="lastName"> last name</label><br />
                  <input type="input" id="lastName" name="lastName" /> */}
            <br />
            <div>
              {/* <div className="register-form__label_container">
                <label className="register-form__label" htmlFor="email">
                  email:
                </label>
                <br />
              </div> */}
  
              <div className="register-form__input_container">
                <input
                  className="register-form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
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
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
  
            <div className="register-form__register_button_container">
              <button className="register-form__register_button">Register</button>
            </div>
          </form>
            <div className="loginLinkContainer">
              <a className="login_Link" href="/login">Log in</a>
            </div>
        </div>
      </div>
    )
}

export default RegisterLayout
