import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Links = () => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
      </Helmet>
      <section className="links">
        <p>
          <a href="cv.pdf" embed>
            resume &#8226;{" "}
          </a>
          <Link to="/blog">blog &#8226;</Link>
          <a href="https://www.linkedin.com/in/patrick-soga-5b4118166/">
            {" "}
            linkedin &#8226;{" "}
          </a>
          <a href="https://github.com/AJB117">github</a>
        </p>
      </section>
    </>
  )
}

export default Links
