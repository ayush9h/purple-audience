import React, { useState } from 'react';
import '../styles/getstarted.css';
import axios from 'axios';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const TwoColumnGrid = () => {

  useLayoutEffect(()=>{
    gsap.from(".left-column",{
      scrollTrigger:".left-column",
      x:-50,
      duration:1,
      opacity:0,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".right-column h3",{
      scrollTrigger:".right-column h3",
      y:-50,
      duration:1,
      opacity:0,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })

    gsap.from(".right-column .form input",{
      stagger:{amount:1},
      scrollTrigger:".right-column .form input",
      y:-50,
      duration:1,
      opacity:0,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })

    gsap.from(".right-column .form label",{
      stagger:{amount:1},
      scrollTrigger:".right-column .form label",
      y:-50,
      duration:1,
      opacity:0,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })


    gsap.from(".right-column .form button",{
      stagger:{amount:1},
      scrollTrigger:".right-column .form button",
      x:50,
      duration:1,
      opacity:0,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
  })
  
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [message, setMessage] = useState('');

  let submit = async(e)=>{
    e.preventDefault()

    try{
      const response = await axios.post("https://ap-south-1.aws.data.mongodb-api.com/app/64913f68b4552e32900a2c59/endpoint/data/v1",
        {name, city, address, phone});
        setMessage(response.data.message);
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className='max-width'>
        <h1 className='get-started-title' id='getstarted'><span>GET</span> STARTED</h1>
    <div className="grid-container">
      <div className="left-column">
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
