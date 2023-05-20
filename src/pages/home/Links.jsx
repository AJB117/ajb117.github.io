import React from "react"
import Href from "../../components/Href"
import { Helmet } from "react-helmet"
import "../../styles/home.css"
import "../../styles/global.css"

const Links = () => (
  <>
    <Helmet>
      <meta name="author" content="Patrick Soga, AJB117" />
    </Helmet>
    <section className="links">
      <div>
        <a href="cv.pdf" embed="true" target="_blank" className="normalLink">
          cv &#8226;{" "}
        </a>
        <Href href="https://www.linkedin.com/in/patrick-soga-5b4118166/">
          linkedin &#8226;
        </Href>
        <Href href="https://github.com/AJB117">
          {" "}
          github (personal) &#8226;{" "}
        </Href>
        <Href href="https://github.com/patricksoga"> github (school)</Href>
      </div>
    </section>
  </>
)

export default Links
