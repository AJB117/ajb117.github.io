import React from "react"
import Interests from "./Interests"
import Description from "./Description"
import Links from "./Links"
import Papers from "./Papers"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/home.css"
import "../../styles/global.css"
import ExpAndEd from "./ExpAndEd"

const Home = () => (
  <>
    <Helmet>
      <meta name="author" content="Patrick Soga, AJB117" />
    </Helmet>
    <div className="home">
      <StaticImage
        className="photo-side"
        // src="../../../PXL_20240322_220231085.jpg"
        src="../../../static/me.jpeg"
        alt="me"
        title="me"
        height={300}
        layout="fixed"
        imgStyle={{ objectFit: "contain" }}
        placeholder="blurred"
      />
      <div className="home-content">
        <Description />
        <Links />
        <Interests />
        <Papers />
        <ExpAndEd />
      </div>
    </div>
  </>
)

export default Home
