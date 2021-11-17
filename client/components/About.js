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
            <img src="https://purewows3.imgix.net/images/articles/2019_10/furniture_stores_nyc_interior_define.jpg?auto=format,compress&cs=strip" />
            <p>David Li</p>
          </div>
          <div className="member-info">
            <img src="https://purewows3.imgix.net/images/articles/2019_10/furniture_stores_nyc_interior_define.jpg?auto=format,compress&cs=strip" />
            <p>Hector Nevarez Gomez</p>
          </div>
          <div className="member-info">
            <img src="https://purewows3.imgix.net/images/articles/2019_10/furniture_stores_nyc_interior_define.jpg?auto=format,compress&cs=strip" />
            <p>Kelsey Smith</p>
          </div>
          <div className="member-info">
            <img src="https://purewows3.imgix.net/images/articles/2019_10/furniture_stores_nyc_interior_define.jpg?auto=format,compress&cs=strip" />
            <p>Sala Yoshida</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
