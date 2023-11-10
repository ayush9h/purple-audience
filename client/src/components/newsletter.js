import React, { useState } from "react";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import '../styles/newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const showToastMessage = () => {
    toast.success('Email Registered. We will contact you shortly !', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if(email === "")
      {
        toast.error("Enter a valid Email Id.", {position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'})
      }
      else{
        showToastMessage();
      }

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="newsletter-section" id="newsletter">
      <div className="max-width">
        <h1 className="subscription"><span>Subscribe</span> to our newsletter</h1>
        <p className="newsletter-desc" id="newsletter">You will never miss our <span>podcasts, latest news etc.</span> Our newsletter is once a <span>week, every Wednesday.</span></p>
        <form onSubmit={handleSubmit}>
          <input className="email-form" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email....." />
          <br />
          <button className="submit-form" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
