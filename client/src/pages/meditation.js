import React,{useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/med.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../assets/demo-music.mp3'
import sleep from '../assets/demo-music-1.mp3'
import lofi from '../assets/demo-music-3.mp3'
import lofi1 from '../assets/demo-music-4.mp3'
import Newsletter from "../components/newsletter";
import Articles from "../components/articles";
const Meditation = ()=>{

    const [tab,setTab] = useState(1);

    function activeTab(tabnumber)
    {
        setTab(tabnumber);
    }
    return (
        <div>
            <Navbar/>
            {/* Home Screen */}
            <div className="medhead-container">
                <div className="max-width">
                    <h1 className="med-title">Meditation</h1>
                    <p className="med-desc">Mindfulness training isn’t limited to meditation, but it’s a <span>great place to start. </span>
                        Meditation is both a skill and an experience that can <span>positively impact your overall 
                        health and happiness.</span>
                    </p>
                    <div className="audio-med">
                        <ReactAudioPlayer src={audio} controls></ReactAudioPlayer>
                    </div>
                </div>
            </div>

            {/* Meditation Tab */}

            <div className="medtab-container">
                <div className="max-width">
                    <h1 className="medtab-title"><span>Free</span> your mind</h1>
                    <div className="music-tab">
                        <div className="tab-container">
                            <div className="tab" onClick={()=>activeTab(1)} style={{borderBottom:tab===1 ? "0.5rem solid #A0FA04" : ""}}>
                                <h1>Calmness</h1>
                            </div>
                            <div className="tab" onClick={()=>activeTab(2)} style={{borderBottom:tab===2 ? "0.5rem solid #A0FA04" : ""}}>
                                <h1>Sleep</h1>
                            </div>
                            <div className="tab" onClick={()=>activeTab(3)} style={{borderBottom:tab===3 ? "0.5rem solid #A0FA04" : ""}}>
                                <h1>Workout</h1>
                            </div>
                            <div className="tab" onClick={()=>activeTab(4)} style={{borderBottom:tab===4 ? "0.5rem solid #A0FA04" : ""}}>
                                <h1>Routine Work</h1>
                            </div>
                        </div>

                        <div className="tab-content">
                            {tab === 1 && <div><h1 className="tab-contentheader">Learn to manage feelings and thoughts with the lifelong skill of <span>everyday mindfulness, any time of the day.</span></h1> <ReactAudioPlayer src={audio} controls></ReactAudioPlayer></div>}
                            {tab === 2 && <div><h1 className="tab-contentheader">Create the conditions for a more restful night’s sleep with <span>sleepcasts, music, and other unique audio experiences.</span></h1> <ReactAudioPlayer src={sleep} controls></ReactAudioPlayer></div>}
                            {tab === 3 && <div><h1 className="tab-contentheader"><span>Train your body and mind</span> at the same time with exercises to strengthen your <span>mental and physical well-being.</span></h1><ReactAudioPlayer src={lofi} controls></ReactAudioPlayer></div>}
                            {tab === 4 && <div><h1 className="tab-contentheader">Get a <span>clearer picture</span> of what matters most with music and meditations designed to help <span>boost your ability to focus.</span></h1> <ReactAudioPlayer src={lofi1} controls></ReactAudioPlayer></div>}
                        </div>
                    </div>
                </div>
            </div>
            <Articles/>
            <Newsletter/>
        <Footer/>
        </div>
    )
}
export default Meditation;