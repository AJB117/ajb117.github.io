import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import Interests from "./Interests"
import Email from "./Email"
import Description from "./Description"
import Links from "./Links"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
      </Helmet>
      <div className="home-content page">
        <div>
          <Description />
          <Links />
          <Interests />
          <Email />
        </div>
        <StaticImage
          className="photo"
          src="../../../static/photo.jpg"
          alt="me"
          title="me"
          height={250}
          layout="fixed"
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default Home
