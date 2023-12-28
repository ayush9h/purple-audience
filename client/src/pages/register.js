import { NavLink } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Register = () => {
  const [avatar, setavatar] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerSucessful, setRegisterSuccessful] = useState(false);
  const showRegisterSuccess = () => {
    toast.success("Account Created Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await fetch(
        "http://localhost:3001/registerSubmit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ avatar, registerPassword, registerEmail }),
        }
      );
      if (!registerResponse.ok) {
        throw new Error(
          `Request failed with status ${registerResponse.status}`
        );
      }

      if (registerEmail === "" || registerPassword === "" || avatar === "") {
        toast.error("Fill all entries", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      } else {
        showRegisterSuccess();
        setRegisterSuccessful(true);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <div>
      {/* Login Logo header */}
      <div className='register-logo-header'>
        <h1>
          <span>Purple</span> Audience
        </h1>
        <p>
          Empowering your mind through <span>mindfulness.</span>
        </p>
        <Popup
          trigger={
            <button className='reg-button'> Registration Guidelines </button>
          }
          position='right center'
          contentStyle={{ width: "420px", height: "140px" }}>
          <ul className='rules-list'>
            <li>
              {" "}
              Password must be greater than 6 characters and must contain at
              least one number.
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
          <h1>Create your account</h1>
        </div>
      </div>

      {/* Login Form */}
      <div className='register-form'>
        <div className='max-width'>
          <form onSubmit={handleRegister}>
            <input
              className='name-register-form'
              type='text'
              placeholder='Your Avatar Name'
              value={avatar}
              onChange={(e) => setavatar(e.target.value)}
            />
            <br />
            <input
              className='email-register-form'
              type='email'
              value={registerEmail}
              placeholder='Email Address'
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <br />
            <input
              className='password-register-form'
              type='password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder='Password'
            />
            <br />
            <button className='submit-register-form' type='submit'>
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Other Signup Methods */}
      <div className='other-login'>
        {registerSucessful && (
          <div className='successful-register'>
            <NavLink to='/login'>
              <h3>
                You are successfully registered. Go to <span>Login Page. </span>
              </h3>
            </NavLink>
          </div>
        )}
        <NavLink to='/login'>
          <h3>
            Already a member of purple audience? Go to <span>Login Page.</span>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
