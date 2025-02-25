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
      <Layout inBlogPost={true}>
        <Home />
      </Layout>
      <footer>
        This{" "}
        <Href href="https://github.com/AJB117/ajb117.github.io/tree/revision">
          site
        </Href>{" "}
        was built with <Href href="https://www.gatsbyjs.com/">Gatsby.</Href>
      </footer>
    </>
  )
}
