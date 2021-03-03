import React from 'react';
import '../../styles/home.css';
import '../../styles/global.css';
import { StaticImage } from 'gatsby-plugin-image';
import Interests from './Interests';
import Email from './Email';
import Description from './Description';
import Links from './Links';

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
      <Description/> 
      <Links/>
      <Interests/>
      <Email/>
    </div>
  )
}

export default Home;