import React, { Component } from 'react'
import defaultImage from "../Images/newscast2.png";
import '../App.css';

export default class About extends Component {
  render() {
    return (
        <div className="about-container">
      <div className="about-header">
        <h1>Welcome to NewsCast</h1>
        <p>NewsCast is a news aggregator application that provides up-to-date news articles from various sources.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={defaultImage} alt="NewsCast Logo" />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>Our mission is to provide a platform where users can access news from different categories and sources in one place.</p>
          <h2>How it Works</h2>
          <p>We use the News API to fetch news articles and display them in a user-friendly format. Users can filter news by category, search for specific news articles, and read them in a clean and simple format.</p>
          <h2>Why Choose NewsCast?</h2>
          <p>NewsCast is the perfect platform for anyone who wants to stay up-to-date with the latest news from around the world. Our platform is easy to use, and our news articles are curated from trusted sources.</p>
          <h2>Features</h2>
          <ul>
            <li><i className="fas fa-newspaper"></i> Get latest news from various sources</li>
            <li><i className="fas fa-filter"></i> Filter news by category (e.g. Entertainment, Technology, Sports, etc.)</li>
            <li><i className="fas fa-search"></i> Search for specific news articles</li>
            <li><i className="fas fa-bookmark"></i> Read news articles in a clean and simple format</li>
          </ul>
        </div>
      </div>
      <div className="about-footer">
        <p>&copy; 2023 NewsCast. All rights reserved.</p>
      </div>
    </div>
    )
  }
}
