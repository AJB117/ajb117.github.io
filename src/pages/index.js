import React from "react"
import Home from "./home/index"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import Href from "../components/Href"
import Layout from "../components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

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
      </footer>
    </>
  )
}

library.add(fab, fas, far)
