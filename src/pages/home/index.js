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
    <section>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
      </Helmet>
      <section className="home-content page">
        <section className="not-photo">
          <Description />
          <Links />
          <Interests />
          <Email />
        </section>
        <StaticImage
          className="photo"
          src="../../../static/photo.jpg"
          alt="me"
          title="me"
          height={250}
          layout="fixed"
          placeholder="blurred"
        />
      </section>
    </section>
  )
}

export default Home
