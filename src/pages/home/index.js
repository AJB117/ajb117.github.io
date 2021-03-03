import React from 'react';
import '../../styles/home.css';
import '../../styles/global.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Home = () => {
  return (
    <div className="home-content page"> 
      <StaticImage
        className="photo"
        src="../../../static/photo.jpg"
        alt="me"
        height={300}
        layout="fixed"
        placeholder="blurred"
      />

      <div className="description">
        <p>
          Patrick Soga's personal site.
          Under construction. 
          Written with <a href="https://www.gatsbyjs.com/">Gatsby.</a>
        </p>
      </div>

      <div className="links">
        <a href="">CV, </a>
        <Link to="/blog">
          Blog, 
        </Link>
        <a href="https://www.linkedin.com/in/patrick-soga-5b4118166/"> LinkedIn, </a>
        <a href="https://github.com/AJB117">Github. </a>
      </div>

      <div className="interests">
        Interested in computer science, programming, math, 
        philosophy, and politics.
      </div>
      <p>psoga343@gmail.com</p>
    </div>
  )
}

export default Home;