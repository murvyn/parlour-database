import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";


const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(defaultValues);
  const { email, password } = form;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
   

    <div className="login-container">
      <div className="login-box">
        <div className="heading mt-4">
          <h2>Parlour Database</h2>
        </div>
        <div className="formField">
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <div className="icon">
              <i class="fa-regular fa-user"></i>
              </div>
              <div className="input-field">
                <FormInput
                  label="Email"
                  inputOptions={{
                    type: "email",
                    onChange: changeHandler,
                    required: true,
                    value: email,
                    name: "email",
                  }}
                />
              </div>
            </div>
            <div className="input-box">
              <div className="icon">
              <i class="fa-solid fa-unlock"></i>
              </div>
              <div className="input-field">
                <FormInput
                  label="Password"
                  inputOptions={{
                    type: "password",
                    onChange: changeHandler,
                    required: true,
                    value: password,
                    name: "password",
                  }}
                />
              </div>
            </div>
            <div id="button-box" className="input-box">
              <div className="icon">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              <div className="input-field">
                <button type="submit">Login</button>
              </div>
            </div>
            <div className="content">
              <div className="remember">
                <div className="tick-box">
                  <input type="checkbox" />
                </div>
                <span>Remember me</span>
              </div>
              <div className="forget">
                <a href="www.www">forget password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  
  );
};

export default SignIn;
