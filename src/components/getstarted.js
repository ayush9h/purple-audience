import React, { useState } from 'react';
import '../styles/getstarted.css';
import axios from 'axios';

const TwoColumnGrid = () => {

  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [message, setMessage] = useState('');

  let submit = async(e)=>{
    e.preventDefault()

    try{
      const response = await axios.post("http://localhost:3000/",
        {name, city, address, phone});
        setMessage(response.data.message);
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className='max-width'>
        <h1 className='get-started-title' id='getstarted'><span>Get</span> Started</h1>
    <div className="grid-container">
      <div className="left-column">
        <h2>Start Your Journey to <span>Mental Well-being</span></h2>
        <p>
          Are you ready to take the first step towards better mental health? Join Purple Audience today and embark on a transformative journey of self-discovery and well-being. Our dedicated community and expert resources are here to support you every step of the way.
        </p>
        <ul>
          <li>Engaging articles and educational content on <span>mental</span> health topics.</li>
          <li>Guided <span>meditation and mindfulness</span> exercises to promote relaxation and inner peace.</li>
          <li>Inspiring stories and testimonials from individuals who have <span>overcome</span> mental health challenges.</li>
          <li>Expert advice from leading professionals in the field of mental wellness.</li>
          <li>Online workshops and events to <span>enhance</span> your knowledge and skills.</li>
          <li>A supportive community of <span>like-minded individuals</span> who understand and empathize with your experiences.</li>
        </ul>
        <p>
          <span>Remember</span>, you're not alone. Together, we can make a positive difference in our mental health and create a world where everyone feels supported and understood.
        </p>
      </div>
      <div className="right-column">
        <form className="form" action='POST'>
          <h3>Get started now</h3>
          <div className="form-group">
            <label name="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter your city" onChange={(e)=>{setCity(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Postal Address</label>
            <input type="text" id="address" placeholder="Enter your address" onChange={(e)=>{setAddress(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
          {message && <p className='form-message'>{message}</p>}

          <button type="submit" onClick={submit}>SUBMIT</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default TwoColumnGrid;
