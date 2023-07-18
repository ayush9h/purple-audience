import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer";
import '../styles/medcorner.css';
import useSound from "use-sound";
import med from "../assets/med.mp3"
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Medcorner = () =>{
  useLayoutEffect(()=>{
    gsap.from(".meditation-container",{
      x:50,
      opacity:0,
      duration:1,
    })
    gsap.from(".meditation-container h1",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
    gsap.from(".meditation-container p",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
    gsap.from(".meditation-container a",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
  })





  return(
    <div>
      <Navbar/>
          <div className="meditation-container">
              <div className="max-width">
              <h1><span>MEDITATION</span></h1>
              <p>Journey from <span>sound to silence</span>, from <span>movement to stillness.</span><br></br>
              Meditation encompasses a valuable skill and a transformative experience <br></br> offering profound
              benefits for your well being and providing <span>contenment in life.</span></p>
              <a href="#">Start with our guided meditation</a>
              </div>
          </div>



      <TwoColumnGrid/>
      <Footer/>
    </div>
  )
}
export default Medcorner;