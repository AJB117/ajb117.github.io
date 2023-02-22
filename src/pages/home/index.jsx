import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import Interests from "./Interests"
import Description from "./Description"
import Links from "./Links"
import Papers from "./Papers"
import News from "./News"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <section>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
      </Helmet>
      <section className="home-content page">
        <StaticImage
          className="photo"
          src="../../../static/IMG_5084-cropped.jpg"
          alt="me"
          title="me"
          height={350}
          layout="fixed"
          imgStyle={{ objectFit: "contain" }}
          placeholder="blurred"
          style={{ marginBottom: "10px" }}
        />
        <section>
          <Description />
          <Links />
          <Interests />
        </section>
      </section>
      <News />
      <Papers />
    </section>
  )
}

export default Home
