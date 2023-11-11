import React,{useState} from "react";
import '../styles/home.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TestimonialSlider from "../components/testimonial";
import Newsletter from "../components/newsletter";
import Articles from "../components/articles";
const Home = () =>{

  

  return (
    <div>
      <Navbar/>

      {/* Home Title */}
      <div className='home-container'>
        <div className='max-width'>
          <h1 className='home-title-one'><span>There's No One</span> Face </h1>
          <h1 className='home-title-two'>to Mental Health <br></br><span>Conditions.</span></h1>
          <p className="home-desc"> Helping people across the country and around the world create and<br></br> sustain mental well-being.
              <span> Purple</span> Audience is your path to wellness and mental well-being.</p>
        </div>
      </div>

      {/* About Container */}
      <div className='about-container' id="about">
        <div className='max-width'>
          <h1 className='about-title'><span>ABOUT</span> US</h1>
          <div className="about-container-para">
            <div className="about-container-img"></div>
            <div className="about-container-desc">
            <p>We are a <span>united community</span> of compassionate individuals who deeply comprehend the immense challenges and paramount 
              significance of Mental Health. Our collective mission is to extend <span>unwavering support, heighten awareness, and 
              fervently advocate for mental well-being.</span> <br></br><br></br>Whether you are personally grappling with mental health issues or supporting a 
              loved one on a similar journey, we stand ready to provide a safe haven, 
              offering <span>a compassionate ear, a plethora of resources, and a nurturing environment for growth and healing.</span>
              <br></br><br></br>United, we endeavor to shatter the oppressive stigma that surrounds mental health, striving to empower individuals 
              to embrace their <span>unique narratives, discover resilience within, and cultivate profoundly fulfilling lives.</span> <br></br><br></br>
              Our bond is fortified by <span>understanding, acceptance, and a commitment to creating a world where mental health</span> is 
              not only understood but celebrated, fostering a future where everyone can thrive emotionally and mentally.
            </p>
            </div>
          </div>
        </div>
      </div>


      
      <div className="testimonial-container">
        <div className='max-width'>
          <h1>TESTIMONIALS</h1>
          <h2><span>What our Customer Say</span></h2>
          <p className='imp'>We place huge value on strong relationships. Customer feedback is vital in helping us to get it right.</p>
          <TestimonialSlider/>
        </div>
    </div>

      {/* Latest articles */}
      <Articles/>

      {/* Subscribe to Newsletter */}
      <Newsletter/>

      {/* Footer */}
      
      <Footer/>
    </div>
  )
}

export default Home