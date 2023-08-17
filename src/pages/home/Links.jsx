import React from "react"
import Href from "../../components/Href"
import { Helmet } from "react-helmet"
import { faFilePdf, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import "../../styles/home.css"
import "../../styles/global.css"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Links = () => (
  <>
    <Helmet>
      <meta name="author" content="Patrick Soga, AJB117" />
    </Helmet>
    <section className="links">
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <a href="mailto:psoga343@gmail.com" className="normalLink">
            <FontAwesomeIcon icon={faEnvelope} /> zqe3cg@virginia.edu
          </a>
        </li>
        <li>
          <a href="cv.pdf" embed="true" target="_blank" className="normalLink">
            <FontAwesomeIcon icon={faFilePdf} /> cv
          </a>
        </li>
        <li>
          <Href href="https://www.linkedin.com/in/patrick-soga-5b4118166/">
            <FontAwesomeIcon icon={faLinkedin} /> linkedin
          </Href>
        </li>
        <li>
          <Href href="https://github.com/AJB117">
            <FontAwesomeIcon icon={faGithub} /> github
          </Href>
        </li>
      </ul>
    </section>
  </>
)

export default Links
