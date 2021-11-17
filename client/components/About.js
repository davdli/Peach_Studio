import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className="member-section">
          <div className="member-info">
            <img src="https://ca.slack-edge.com/T024FPYBQ-U02EF7BFCLF-2a8d62d0dd1f-512" />
            <p>David Li</p>
          </div>
          <div className="member-info">
            <img src="https://ca.slack-edge.com/T024FPYBQ-U02EP6J73JA-aa6fd70b38e8-512" />
            <p>Hector Nevarez Gomez</p>
          </div>
          <div className="member-info">
            <img src="Kelsey.jpg" />
            <p>Kelsey Smith</p>
          </div>
          <div className="member-info">
            <img src="Sala.png" />
            <p>Sala Yoshida</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
