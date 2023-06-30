import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer";
import '../styles/medcorner.css';
import useSound from "use-sound";
import med from "../assets/med.mp3"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons";
import {useEffect, useState } from "react";

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
                    <p>Journey from sound to silence, from movement to stillness, from chaos to peace. <br></br>
                    Give yourself a boost of happiness and calmness.<br></br>Meditation encompasses both a valuable skill and a transformative experience,<br></br> offering profound benefits for your well-being and cultivating a greater sense of joy<br></br> and contentment in life.</p>
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
            </div>
        </div>           
    <TwoColumnGrid/>
    <Footer/>
    </div>
    )
}
export default Medcorner;