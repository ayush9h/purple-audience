import React from "react";
import '../styles/article.css'
const Articles = () =>{
    return(
        <div>
            <div className="latest-articles-section">
        <div className="max-width">
            <h1 className="latest-articles-title">Latest <span>Articles</span></h1>
            <div className="articles-grid">
                <div className="article-card">
                    <div className="article-link">
                      <h1> Ways to make meditation a daily habit.</h1>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <h1> Meditation for beginners.</h1>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <h1> Self care ideas that work when you are busy.</h1>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <h1> Coping with tragedy and tragic events.</h1>
                    </div>
                </div>
                <div className="article-card">
                <div className="article-link">
                      <h1> Breathing exercies to reduce stress.</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>

        </div>
    )
}
export default Articles