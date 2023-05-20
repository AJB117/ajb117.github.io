import React from "react"
import Home from "./home/index"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import Href from "../components/Href"
import Layout from "../components/Layout"

export default function HomeIndex() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Patrick Soga's personal website" />
        <meta name="author" content="Patrick Soga, AJB117" />
        <title>Patrick Soga</title>
      </Helmet>
      <Layout>
        <Home />
      </Layout>
      <footer>
        This site was built using{" "}
        <Href href="https://www.gatsbyjs.com/" className="normalLink">
          Gatsby.
        </Href>
        <a
          href="https://clustrmaps.com/site/1bu47"
          title="Visit tracker"
          style={{ display: "none" }}
        >
          <img
            style={{ display: "none" }}
            src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=yRhSh5ifVGfOg83kWjRtv4tKucQeFHFiWGuehYwaLeI"
          />
        </a>
      </footer>
    </>
  )
}
