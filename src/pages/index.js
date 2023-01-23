import React from "react"
import Home from "./home/index"
import "../styles/global.css"
import { Helmet } from "react-helmet"
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
        <a href="https://www.gatsbyjs.com/">Gatsby.</a>
      </footer>
    </>
  )
}
