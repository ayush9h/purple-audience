import '../styles/Home.css';
import Navbar from '../components/Navbar';
import ProfileCards from '../components/profileCards';
import TestimonialSlider from '../components/testimonial';
import TwoColumnGrid from '../components/getstarted';
import Footer from '../components/footer';

const App = () => {
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
            </br>We come together to provide <span>Support, Raise Awareness and Advocate for Mental-Well being.</span> Whether you are personally
            facing Mental health issues or having a loved one going through a similar journey, we are here to lend a <span>compassionate ear,share resources
              and foster a safe space</span> for growth and healing.<br></br>
              Together, we strive to break the <span>Stigma</span> surrounding Mental Health and empower individuals to embrace their
              <span> unique stories, find strength within themselves and lead fullfilling lives.</span></p>
          </div>
        </div>
      </div>
        {/******** Team Container *******/}
        <div className='max-width'>
        <div className='team-container'>
          <h1>Meet our <span>Amazing</span> Team</h1>
        </div>
          <ProfileCards/>
        </div>

    {/******** Testimonial Container *******/}
    <div className='max-width'>
        <div className="testimonial-container">
          <h1><span>Customer</span> Testimonials</h1>
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
