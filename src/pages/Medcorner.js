import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer";
import '../styles/medcorner.css';
import useSound from "use-sound";
import med from "../assets/med.mp3"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; 
import {FaArrowCircleRight} from "react-icons/fa"
import { IconContext } from "react-icons";
import {useEffect, useState } from "react";
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Medcorner = () =>{

    const [isPlaying, setIsPlaying] = useState(false);
    const [play,{pause,duration,sound}] = useSound(med)

    const playingButton = () => {
        if (isPlaying) {
          pause(); 
          setIsPlaying(false);
        } else {
          play(); 
          setIsPlaying(true);
        }
      };

      const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
      }); // current position of the audio in minutes and seconds
      const [seconds, setSeconds] = useState();
      
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
          min: min,
          sec: secRemain
        };

    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            
            setCurrTime({
              min,
              sec,
            });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, [sound]);

    return (
        <div>
            <Navbar/>
            <div className="medcorner-container">
                <div className="max-width">
                    <h1><span>Meditation.</span></h1>
                    <p>Journey from <span>sound to silence</span>, from <span>movement to stillness</span>, from <span>chaos to peace.</span> <br></br>
                    Give yourself a boost of happiness and calmness.<br></br>Meditation encompasses both a <span>valuable skill</span> and a <span>transformative experience,</span><br></br> offering profound benefits for your well-being and cultivating a greater sense of joy<br></br> and <span>contentment in life.</span></p>
                </div>
            </div>
            
            <div className="medmusic-guide">
                <div className="max-width">
                    <h1><span>Guided</span> Meditation</h1>
                    <p>Try our 3 minute Guided Medidation music for <span>stress relief, depression and anxiety.</span></p>

                    <div className="component">
                        <div>
                          <h3 className="title">PLEASE CALM MY MIND</h3>
                          <p className="subTitle">Creator: Lesfm</p>
                          <p>All credits to the creator.</p>
                        </div>
                        <div className="time">
                            <p>
                              {currTime.min}:{currTime.sec}
                            </p>
                            <p>
                              {time.min}:{time.sec}
                            </p>
                                </div>
                                <input
                                  type="range"
                                  min="0"
                                  max={duration / 1000}
                                  default="0"
                                  value={seconds}
                                  className="timeline"
                                  onChange={(e) => {
                                    sound.seek([e.target.value]);
                                  }}
                                />
                        <div>
                          <button className="playButton">
                            <IconContext.Provider value={{ size: "3rem", color: "#6509ef" }}>
                            </IconContext.Provider>
                          </button>
                          {!isPlaying ? (
                            <button className="playButton" onClick={playingButton}>
                              <IconContext.Provider value={{ size: "3rem", color: "#6509ef" }}>
                                <AiFillPlayCircle />
                              </IconContext.Provider>
                            </button>
                          ) : (
                            <button className="playButton" onClick={playingButton}>
                              <IconContext.Provider value={{ size: "3rem", color: "#6509ef" }}>
                                <AiFillPauseCircle />
                              </IconContext.Provider>
                            </button>
                          )}
                          <button className="playButton">
                            <IconContext.Provider value={{ size: "3rem", color: "#6509ef" }}>
                            </IconContext.Provider>
                          </button>
                         
                    </div>
              </div>


                <div className="blog-container">
                  <h1>Latest <span>Articles</span></h1>
                  <div className="blog-cardholder">
                          <div className="medcard">
                            <h3>01. What is Meditation</h3>
                            <p>Learn about meditation by our certified experts.</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                          <div className="medcard">
                          <h3>02. Why is it necessary</h3>
                            <p>Learn about the benefits of the meditation by our certified gurus.</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                          <div className="medcard">
                          <h3>03. Maintain Your Routine</h3>
                            <p>Learn about why a good routine is important.</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                          <div className="medcard">
                          <h3>04. Balance Life and Job</h3>
                            <p>How to Balance Life and Job simultaneously.</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                          <div className="medcard">
                          <h3>05. Implement Good Habits</h3>
                            <p>How to get rid of bad habits and develop good ones.</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                          <div className="medcard">
                          <h3>06. Time Management</h3>
                            <p>Why is it important and how to do it?</p>
                            <IconContext.Provider value={{ size: "2rem", color: "#6509ef"}} clas>
                                <FaArrowCircleRight />
                              </IconContext.Provider>
                          </div>
                  </div>
                </div>
            </div>
        </div>           
    <TwoColumnGrid/>
    <Footer/>
    </div>
    )
}
export default Medcorner;