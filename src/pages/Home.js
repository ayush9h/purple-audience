import '../styles/Home.css';
import Navbar from '../components/Navbar';
import TestimonialSlider from '../components/testimonial';
import TwoColumnGrid from '../components/getstarted';
import Footer from '../components/footer';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useLayoutEffect(()=>{

      gsap.from(".home-container",{
        x:50,
        opacity:0,
        duration:1,
      })
      gsap.from(".home-title-one",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
      gsap.from(".home-title-two",{y:20, rotateX:-45,opacity:0, duration:1.5,delay:1.6})
      gsap.from(".know-more",{x:-20,opacity:0, duration:1.5,delay:1.6})

      gsap.from(".about-container",{
        scrollTrigger:".about-container",
        x:-50,
        duration:1,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })

      gsap.from(".about-container h1",{
        scrollTrigger:".about-container h1",
        x:-50,
        duration:1,
        delay:1,
        opacity:0,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })
      gsap.from(".about-container p",{
        scrollTrigger:".about-container p",
        x:-50,
        opacity:0,
        duration:1,
        delay:1.5,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })


      gsap.from(".testimonial-container",{
        scrollTrigger:".testimonial-container",
        opacity:0,
        duration:1,
        delay:1,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
  })

      gsap.from(".testimonial-container h1",{
        scrollTrigger:".testimonial-container h1",
        opacity:0,
        duration:1.5,
        rotateX:-45,
        delay:1.1,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })

      gsap.from(".testimonial-container h2",{
        scrollTrigger:".testimonial-container h2",
        opacity:0,
        duration:1.5,
        rotateX:-45,
        delay:1.1,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })
      gsap.from(".testimonial-container .imp",{
        scrollTrigger:".testimonial-container .imp",
        opacity:0,
        duration:1.5,
        rotateX:-45,
        delay:1.1,
        start:"top 20%",
        end:"bottom 80%",
        toggleActions:"play none none reverse",
      })
  })
  return (
    <div>
    <Navbar/>

    {/******** About Container *******/}
    <div className='home-container'>
        <div className='max-width'>
          <h1 className='home-title-one'><span>Empower</span> Your Mind</h1>
          <h1 className='home-title-two'>Purple Audience is <span>Here.</span></h1>
          <a className='know-more' href='#about'> Know More</a>
        </div>
    </div>

    {/******** About Container *******/}
    
      <div className='about-container' id="about">
        <div className='max-width'>
          <h1 className='about-title'><span>ABOUT</span> US</h1>
          <div className="about-container-para">
            <p>We are community of individuals who understand the challenges and importance of <span>Mental Health.</span><br>
            </br><br></br>We come together to provide <span>Support, Raise Awareness and Advocate for Mental-Well being.</span> Whether you are personally
            facing Mental health issues or having a loved one going through a similar journey, we are here to lend a <span>compassionate ear, share resources
              and foster a safe space</span> for growth and healing.<br></br><br></br>
              Together, we strive to break the <span>Stigma</span> surrounding Mental Health and empower individuals to embrace their
              <span> unique stories, find strength within themselves and lead fullfilling lives.</span></p>
          </div>
        </div>
      </div>
        {/******** Team Container *******/}
        {/* <div className='max-width'>
        <div className='team-container'>
          <h1>Meet our <span>Amazing</span> Team</h1>
        </div>
          <ProfileCards/>
        </div> */}

    {/******** Testimonial Container *******/}
    <div className='max-width'>
        <div className="testimonial-container">
          <h1>TESTIMONIALS</h1>
          <h2><span>What our Customer Say</span></h2>
          <p className='imp'>We place huge value on strong relationships. Customer feedback is vital in helping us to get it right.</p>
          <TestimonialSlider/>
        </div>
    </div>
  {/************Get-started Container************/}
    <TwoColumnGrid/>
    {/************Footer Container************/}
    <Footer/>
    </div>
    
  );
}

export default App;
