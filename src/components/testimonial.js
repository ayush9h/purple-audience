import React from 'react';
import '../styles/testimonial.css';
import { gsap } from 'gsap';

const testimonials = [
    {
      id: 1,
      text: 'Purple Audience has been instrumental in helping me understand and manage my mental health. Their resources and support have made a significant positive impact on my well-being.',
      author: 'Sarah Johnson (Author)',
    },
    {
      id: 2,
      text: 'I am incredibly grateful for the Purple Audience community. It is a safe space where I can connect with others who understand the challenges of mental health and find comfort in knowing I am not alone.',
      author: 'Mark Thompson (Student at ABC University)',
    },
    {
      id: 3,
      text: 'Purple Audience has provided me with valuable tools and insights to navigate my mental health journey. Their dedication to raising awareness and reducing the stigma surrounding mental health is truly inspiring.',
      author: 'Emily Davis (Senior Manager at ABC Company)',
    },
    {
      id: 4,
      text: 'As someone who deals with mental health issues, Purple Audience has been a beacon of hope for me. Their articles, workshops, and events have given me the knowledge and motivation to prioritize self-care and seek help when needed.',
      author: 'Michael Anderson (Teacher)',
    },
    {
      id: 5,
      text: 'I cannot recommend Purple Audience enough. Their commitment to mental health advocacy is evident in everything they do. Thanks to their resources and support, I have made significant strides in my mental well-being.',
      author: 'Jessica Parker (Student at XYZ University)',
    },
  ];
  
class TestimonialSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  
  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % testimonials.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    
    return (
      
      <div className="testimonial-slider">
        <div className="testimonial">
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="testimonial-author">- {testimonials[currentIndex].author}</p>
        </div>
        <div className="testimonial-controls">
          <button className="next-btn" onClick={this.goToNextSlide}>
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

export default TestimonialSlider;
