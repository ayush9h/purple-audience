import { NavLink } from "react-router-dom";
import "../styles/login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const showLoginSuccess = () => {
    toast.success("Account Logged In Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await fetch("http://localhost:3001/loginSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginEmail }),
      });
      if (!loginResponse.ok) {
        throw new Error(`Request failed with status ${loginResponse.status}`);
      }

      if (loginEmail === "") {
        toast.error("Fill all entries", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      } else {
        showLoginSuccess();
        setLoginSuccessful(true);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <div>
      {/* Login Logo header */}
      <div className='login-logo-header'>
        <h1>
          <span>Purple</span> Audience
        </h1>
        <p>
          Empowering your mind through <span>mindfulness.</span>
        </p>
        <Popup
          trigger={<button className='reg-button'> Login Guidelines </button>}
          position='right center'
          contentStyle={{ width: "420px", height: "140px" }}>
          <ul className='rules-list'>
            <li>
              Make sure you have registered yourself through the registration
              form.
            </li>
            <br />
            <li>
              {" "}
              Enter a valid email id. The domain appears to the right of the{" "}
              <span>@ </span>
              symbol. For example, in the address <span>
                example@mail.com
              </span>{" "}
            </li>
          </ul>
        </Popup>
      </div>

      {/* Welcome Back Header */}
      <div className='welcome-back-header'>
        <div className='max-width'>
          <h1>Welcome Back</h1>
        </div>
      </div>

      {/* Login Form */}
      <div className='login-form'>
        <div className='max-width'>
          <form onSubmit={handleLogin}>
            <input
              className='email-login-form'
              type='email'
              value={loginEmail}
              placeholder='Email Address'
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <br />
            <button className='submit-login-form' type='submit'>
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Other Signup Methods */}
      <div className='other-login'>
        {loginSuccessful && (
          <div className='successful-register'>
            <h3>You are successfully logged in.</h3>
          </div>
        )}
        <NavLink to='/'>
          <h3>
            Back to <span>Home Page.</span>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
