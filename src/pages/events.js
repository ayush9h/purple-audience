import Navbar from "../components/Navbar";
import TwoColumnGrid from "../components/getstarted";
import Footer from "../components/footer"
import React from "react";
import "../styles/events.css";

const events = [
    {
      title: "Mental Health Awareness Workshop",
      description: "A mental health awareness workshop is an educational session designed to increase understanding and knowledge about mental health issues. It aims to promote awareness, reduce stigma, and provide practical tools and strategies to support mental well-being.",
      countdown: "10 days left for Registration",
    },
    {
      title: "Breathing Meditation Workshop",
      description: "A breathing meditation workshop is a session focused on teaching and practicing different techniques of mindful breathing for relaxation, stress reduction, and promoting overall well-being. It aims to guide participants in harnessing the power of their breath to cultivate mindfulness, calmness, and inner peace.",
      countdown: "15 days left for Registration",
    },
    {
      title: "Journey to Center of Mind",
      description: "A metaphorical concept that represents an inner exploration and introspective journey into one's own mind, thoughts, and consciousness. It signifies the process of delving deep within oneself to gain a deeper understanding of one's thoughts, emotions, beliefs, and inner experiences.",
      countdown: "20 days left for Registration",
    },
  ];
  
  const EventCard = ({ event }) => {
    return (
      <div className="card">
        <div className="card-details">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <div className="countdown">
            <span>{event.countdown}</span>
          </div>
          <button>REGISTER</button>
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
        <h1><span>UPCOMING</span> EVENTS - 2023</h1>
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