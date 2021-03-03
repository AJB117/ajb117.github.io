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
        title="me"
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
        <a href="">CV &#8226; </a>
        <Link to="/blog">
          Blog &#8226;
        </Link>
        <a href="https://www.linkedin.com/in/patrick-soga-5b4118166/"> LinkedIn &#8226; </a>
        <a href="https://github.com/AJB117">Github</a>
      </div>

      <div className="interests">
        I'm a third-year student at the <a href="https://nd.edu">University of Notre Dame </a>
        studying CS and philosophy.
        Interested in computer science, programming, math, 
        philosophy, and politics.
      </div>
      <p>psoga343@gmail.com</p>
    </div>
  )
}

export default Home;