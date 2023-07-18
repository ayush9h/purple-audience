import React from 'react'
import { useLayoutEffect, useState,useRef} from 'react';
import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer";
import '../styles/medcorner.css';
import yourSong from '../assets/med.mp3';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Medcorner = () =>{

  const songTitle = 'Please Call my Mind';
  const songAuthor = 'Lexfm';

  // Ref for the audio element
  const audioRef = useRef(null);

  // State for the music player
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle play/pause
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useLayoutEffect(()=>{

  
    gsap.from(".meditation-container",{
      x:50,
      opacity:0,
      duration:1,
    })
    gsap.from(".meditation-container h1",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
    gsap.from(".meditation-container p",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})
    gsap.from(".meditation-container a",{y:-20,rotateX:-45,opacity:0,duration:1.5,delay:1.6})


    gsap.from(".medi-header h1",{
      scrollTrigger:".medi-header",
      rotateX:-45,
      opacity:0,
      duration:1,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })

    gsap.from(".sub_1",{
      scrollTrigger:".sub_1",
      opacity:0,
      duration:1,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".sub_2",{
      scrollTrigger:".sub_2",
      opacity:0,
      duration:1.2,
      delay:1.1,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".sub_3",{
      scrollTrigger:".sub_3",
      opacity:0,
      duration:1.3,
      delay:1.2,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".sub_4",{
      scrollTrigger:".sub_4",
      opacity:0,
      duration:1.4,
      delay:1.3,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".sub_5",{
      scrollTrigger:".sub_5",
      opacity:0,
      duration:1.5,
      delay:1.4,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
    gsap.from(".sub_6",{
      scrollTrigger:".sub_6",
      opacity:0,
      duration:1.6,
      delay:1.5,
      start:"top 20%",
      end:"bottom 80%",
      toggleActions:"play none none reverse",
    })
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
              <a href="#guided-med">Start with our guided meditation</a>
              </div>
          </div>

          <div className="medi-header">
          <div className="max-width">
              <h1><span>BENEFITS</span> OF MEDITATION</h1>
            </div>
          </div>
           
          <div className="meditation-benefits">
            <div className="benefit-card sub_1">
              <h1>Skills to <span>manage</span> your stress.</h1>
            </div>
            <div className="benefit-card sub_2">
              <h1><span>Increased</span> patience and tolerance.</h1>
            </div>
            <div className="benefit-card sub_3">
              <h1><span>Focusing</span> on the present.</h1>
            </div>

            <div className="benefit-card sub_4">
              <h1>Reducing your <span>negative</span> emotions.</h1>
            </div>
            <div className="benefit-card sub_5">
              <h1><span>Improving</span> sleep quality.</h1>
            </div>
            <div className="benefit-card sub_6">
              <h1><span>Increasing</span> self awareness.</h1>
            </div>
          </div>

          {/* Guided Meditation Container */}

          <div className="guided-med" id="guided-med">
            <div className="max-width">
              <h1><span>GUIDED</span> MEDITATION</h1>
              <p>Listen to our <span>3 minutes</span> guided meditation for <span>calmness and relaxation.</span></p>
              <div className='music-container'>
                  <h2>Track: {songTitle}</h2>
                  <h3>Author: {songAuthor}</h3>
                  <audio ref={audioRef} src={yourSong} />
                  <button onClick={handlePlayPause}>{isPlaying ? 'PAUSE' : 'PLAY'}</button>
              </div>
            </div>
          </div>

      <TwoColumnGrid/>
      <Footer/>
    </div>
  )
}
export default Medcorner;