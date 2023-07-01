import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer"
import React from "react";
import "../styles/events.css";

const events = [
    {
      title: "Mental Health Awareness Workshop",
      description: "A mental health awareness workshop is an educational session designed to increase understanding and knowledge about mental health issues. It aims to promote awareness, reduce stigma, and provide practical tools and strategies to support mental well-being.",
    },
    {
      title: "Breathing Meditation Workshop",
      description: "A breathing meditation workshop is a session focused on teaching and practicing different techniques of mindful breathing for relaxation, stress reduction, and promoting overall well-being. It aims to guide participants in harnessing the power of their breath to cultivate mindfulness, calmness, and inner peace.",
    },
    {
      title: "Journey to Center of Mind",
      description: "A metaphorical concept that represents an inner exploration and introspective journey into one's own mind, thoughts, and consciousness. It signifies the process of delving deep within oneself to gain a deeper understanding of one's thoughts, emotions, beliefs, and inner experiences.",
    },
  ];
  
  const EventCard = ({ event }) => {
    return (
      <div className="card">
        <div className="card-details">
          <h2>{event.title}</h2>
          <p className="event_desc">{event.description}</p>
          <p className="event_info"><span>Location: </span>Connaught Place, Delhi NCR, India</p>
          <p className="event_info"><span>Time: </span>11:00 am to 13:00 pm</p>
          <div className="countdown">
            <span>No Registration is required.</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default function Events() {
    return (
        <div>
            <Navbar/>
        <div className="card-container">
          <div className="max-width">
            <div className="event-title">
              
            <h1 className="upcoming-events"><span>UPCOMING</span> EVENTS - 2K23</h1>
            </div>
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