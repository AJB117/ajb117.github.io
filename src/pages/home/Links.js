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
        <div>
          <a href="cv.pdf" embed>
            cv &#8226;{" "}
          </a>
          {/* <Link to="/blog">posts &#8226; </Link> */}
          <a href="https://www.linkedin.com/in/patrick-soga-5b4118166/">
            linkedin &#8226;
          </a>
          <a href="https://github.com/AJB117"> github (personal) &#8226; </a>
          <a href="https://github.com/patricksoga"> github (school)</a>
        </div>
        {/* <div>
          <a href="https://github.com/AJB117"> github (personal) &#8226; </a>
          <a href="https://github.com/patricksoga"> github (school)</a>
        </div> */}
        <a href="http://nlp.nd.edu">ND Natural Language Processing Group</a>
        <p></p>
      </section>
    </>
  )
}

export default Links
