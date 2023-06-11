import Navbar from "../components/Navbar";
import MusicTabs from "../components/medmusic";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer"
import '../styles/medcorner.css'
const medcorner = () =>{
    return (
        <div>
            <Navbar/>
                <div className="medcorner-container">
                    <div className="max-width">
                    <h1>Tranquil treat for <br/> <span>Mindfulness</span>.</h1>
                    <p> Step into our Meditation Corner and let the melodies embrace <br/>you on your path to <span>tranquility and well-being.</span></p>
                    </div>
                </div>

                <div className="types-of-meditating">
                    <div className="max-width">
                    <h1>Choose your <span>type of meditation</span></h1>
                    <MusicTabs/>
                    </div>
                </div>
            <TwoColumnGrid/>
            <Footer/>
        </div>
    )
}
export default medcorner;