import React from "react";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import Articles from "../components/articles";
import '../styles/about.css'
const About = () =>{
    const profiles = [
        {
          id: 1,
          name: 'John Doe',
          position: 'Founder & CEO',
          image: 'https://www.webxcreation.com/event-recruitment/images/profile-1.jpg',
          linkedin: 'https://www.linkedin.com/in/johndoe',
          facebook: 'https://www.facebook.com/johndoe',
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'HOD - Meditation Wellness Center',
          image: 'https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png',
          linkedin: 'https://www.linkedin.com/in/johndoe',
          facebook: 'https://www.facebook.com/johndoe',
        },
        {
          id: 3,
          name: 'Allen Joe',
          position: 'HOD - Stress Relief Center',
          image: 'https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?b=1&s=612x612&w=0&k=20&c=7hgSq1L2mpIbpuuw00KELApMpmZfBkZ-RBxn3Qps5zQ=',
          linkedin: 'https://www.linkedin.com/in/johndoe',
          facebook: 'https://www.facebook.com/johndoe',
        },
        {
          id: 4,
          name: 'Emma Thompson',
          position: 'Creative Director',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          linkedin: 'https://www.linkedin.com/in/emmathompson',
          facebook: 'https://www.facebook.com/emmathompson',
        },
        {
          id: 5,
          name: 'Robert Johnson',
          position: 'Therapist',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          linkedin: 'https://www.linkedin.com/in/robertjohnson',
          facebook: 'https://www.facebook.com/robertjohnson',
        },
        {
          id: 6,
          name: 'Linda Davis',
          position: 'Wellness Coach',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          linkedin: 'https://www.linkedin.com/in/lindadavis',
          facebook: 'https://www.facebook.com/lindadavis',
        },
      ];
    return(
    <div>
        <Navbar/>
        <div className="abouthead-container">
            <div className="max-width">
                <h1>About <br></br> <span>Purple</span> Audience</h1>
                <p className="about-desc">Our mission is to make the world <span>a better living place.</span></p>
            </div>
        </div>

        <div className="our-purpose">
          <div className="max-width">
              <div className="our-values">
                <div className="card-value">
                  <h1>
                    Who we <span>are</span>
                  </h1>
                  <p>Think of Purple Audience as your lifelong guide to better mental health. We’re here for you whenever you need us, wherever you are, helping you get through tough times and find joy in every day.</p>
                </div>
                <div className="card-value">
                <h1>
                    What we <span>do</span>
                  </h1>
                  <p>Through evidence-based meditation and mindfulness tools, mental health coaching, therapy, psychiatry, Purple Audience helps you create life-changing habits to support your mental health and find a healthier, happier you.</p>
                </div>
                <div className="card-value">
                <h1>
                   How we <span>do it</span>
                  </h1>
                  <p>Our four values inform our decisions and how we operate day-to-day: __put members first; bring a beginner's mind; seek truth, speak truth; embrace ownership__</p>
                </div>
              </div>
          </div>
        </div>


        <h1 className="team-title">Our <span>Amazing</span> Team</h1>
        <div className="profile-cards-container">
            
      {profiles.map((profile) => (
        <div className="max-width">
        <div key={profile.id} className="profile-card">
          <img src={profile.image} alt={profile.name} className="profile-image" />
          <div className="profile-details">
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-position">{profile.position}</p>
            <div className="profile-socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" />
              </a>
              <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
          </div>
        </div>
        </div>
    </div>
      ))}
    </div>
    <Articles/>
    <Newsletter/>
    <Footer/>
    </div>
    )
}
export default About