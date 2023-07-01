import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer"
import React from "react";
import "../styles/events.css";

const events = [
  {
    title : "Mental Awareness Workshop",
    description: "A mental health awareness workshop is an educational session designed to increase understanding and knowledge about mental health issues. It aims to promote awareness, reduce stigma, and provide practical tools and strategies to support mental well-being.",
    date : "30 Aug 2023",
    location: "Connaught Place, Delhi, India",
    time : "10:00 am to 1:00 pm",
  },
  {
    title: "Breathing Meditation Workshop",
    description: "A breathing meditation workshop is a session focused on teaching and practicing different techniques of mindful breathing for relaxation, stress reduction, and promoting overall well-being. It aims to guide participants in harnessing the power of their breath to cultivate mindfulness, calmness, and inner peace.",
    date : "5 September 2023",
    location: "Connaught Place, Delhi, India",
    time : "10:00 am to 1:00 pm",
  },
  {
    title: "Journey to Center of Mind",
    description: "A metaphorical concept that represents an inner exploration and introspective journey into one's own mind, thoughts, and consciousness. It signifies the process of delving deep within oneself to gain a deeper understanding of one's thoughts, emotions, beliefs, and inner experiences.",
    date : "15 September 2023",
    location: "Connaught Place, Delhi, India",
    time : "10:00 am to 1:00 pm",
  },
]

const EventCard = ({event}) =>{
  return (
    <div className="card">
      <div className="card-image"> </div>
      <div className="card-desc"> 
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <h4 className="date"><span>Date: </span>{event.date}</h4>
        <h4 className="location"><span>Location: </span>{event.location}</h4>
        <h4 className="timer"><span>Time: </span>{event.time}</h4>
        <h1 className="reg"><span>REGISTRATION NOT REQUIRED</span></h1>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div>
      <Navbar/>  
      {/*******For Title*******/}
      <div className="event-title-container">
        <div className="max-width">
              <h1><span>Upcoming</span> Events - 2K23</h1>
        </div>
      </div>

      {/*******For Cards ******/}
        <div className="event-card-container">
          <div className="max-width">
          {events.map((event, index) => (
          <EventCard event={event} key={index} />
          
        ))}

          </div>
        </div>
      <TwoColumnGrid/>
      <Footer/>
    </div>
  );
}