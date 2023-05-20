import React from "react"
import Interests from "./Interests"
import Description from "./Description"
import Links from "./Links"
import Papers from "./Papers"
import News from "./News"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/home.css"
import "../../styles/global.css"

const Home = () => (
  <section>
    <Helmet>
      <meta name="author" content="Patrick Soga, AJB117" />
    </Helmet>
    <section className="home-content page">
      <section>
        <Description />
        <Links />
        <Interests />
      </section>
      <StaticImage
        className="photo"
        src="../../../static/IMG_5084-cropped.jpg"
        alt="me"
        title="me"
        height={320}
        layout="fixed"
        imgStyle={{ objectFit: "contain" }}
        placeholder="blurred"
        style={{ marginBottom: "10px" }}
      />
    </section>
    {/* <News /> */}
    <Papers />
  </section>
)

export default Home
