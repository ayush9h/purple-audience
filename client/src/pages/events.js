import React, { useState } from "react";
import "../styles/events.css";
import Newsletter from "../components/newsletter";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Articles from "../components/articles";

const initialEvents = [
  {
    title: "Mental Awareness Workshop",
    description: "A mental health awareness workshop is an educational session designed to increase understanding and knowledge about mental health issues. It aims to promote awareness, reduce stigma, and provide practical tools and strategies to support mental well-being.",
    date: "30 Aug 2023",
    location: "Connaught Place, Delhi, India",
    time: "10:00 am to 1:00 pm",
  },
  {
    title: "Breathing Meditation Workshop",
    description: "A breathing meditation workshop is a session focused on teaching and practicing different techniques of mindful breathing for relaxation, stress reduction, and promoting overall well-being. It aims to guide participants in harnessing the power of their breath to cultivate mindfulness, calmness, and inner peace.",
    date: "5 September 2023",
    location: "Connaught Place, Delhi, India",
    time: "10:00 am to 1:00 pm",
  },
  {
    title: "Journey to Center of Mind",
    description: "A metaphorical concept that represents an inner exploration and introspective journey into one's own mind, thoughts, and consciousness. It signifies the process of delving deep within oneself to gain a deeper understanding of one's thoughts, emotions, beliefs, and inner experiences.",
    date: "15 September 2023",
    location: "Connaught Place, Delhi, India",
    time: "10:00 am to 1:00 pm",
  },
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredEvents = activeTab === "upcoming" ? events : [];

  return (
    <div>
      <Navbar />
      <div className="event-title-container">
        <div className="max-width">
          <h1><span>Upcoming</span><br></br> Events-2K23</h1>
          <p>Zero hidden <span>service fees, group discounts and more</span>. <br></br>Because it should be this easy.</p>
        </div>
      </div>

      <div className="event-card-container">
        <div className="max-width">
        <div className="event-tabs">
            <button
              className={activeTab === "upcoming" ? "active" : ""}
              onClick={() => handleTabChange("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={activeTab === "past" ? "active" : ""}
              onClick={() => handleTabChange("past")}
            >
              Past Events
            </button>
          </div>
          {filteredEvents.map((event, index) => (
            <div className="card" key={index}>
              <div className="card-image"></div>
              <div className="card-desc">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <h4 className="date">
                  <span>Date: </span>
                  {event.date}
                </h4>
                <h4 className="location">
                  <span>Location: </span>
                  {event.location}
                </h4>
                <h4 className="timer">
                  <span>Time: </span>
                  {event.time}
                </h4>
                <h1 className="reg">
                  <span>REGISTRATION NOT REQUIRED</span>
                </h1>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="no-events">No events to display.</div>
          )}
        </div>
      </div>
      <Articles/>
      <Newsletter />
      <Footer />
    </div>
  );
}
