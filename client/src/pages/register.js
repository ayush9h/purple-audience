import { NavLink } from "react-router-dom";
import "../styles/register.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [avatar, setavatar] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

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
        <NavLink to='/'>
          <h3>
            Back to <span>Home Page</span>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
