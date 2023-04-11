import React from "react"
import Href from "../../components/Href"
import "../../styles/home.css"
import "../../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Description = () => {
  const [showName, setShowName] = React.useState(false)
  return (
    <section className="description">
      <div
        className="nameText"
        style={{ visibility: showName ? "visible" : "hidden" }}
      >
        <ruby>
          {" "}
          曽我 <rt>そが</rt>
        </ruby>{" "}
        パトリック{" "}
        <ruby>
          守杜<rt>もりと</rt>
        </ruby>
      </div>
      <h2
        style={{ margin: 0, padding: 0 }}
        className="name"
        onMouseEnter={() => setShowName(!showName)}
        onMouseLeave={() => setShowName(!showName)}
      >
        Patrick Soga
      </h2>
      <p>
        <FontAwesomeIcon icon="fa-location-dot" style={{ marginLeft: "2px" }} />{" "}
        <span className="linkWrapper">
          <Href
            href="https://www.google.com/maps/place/Charlottesville,+VA/@38.040082,-78.5208818,14z/data=!3m1!4b1!4m6!3m5!1s0x89b3862dea50a48f:0x9086f096c38b74fc!8m2!3d38.0293059!4d-78.4766781!16zL20vMG1wM2w"
            className="normalLink"
          >
            Charlottesville, VA
          </Href>
        </span>
        <br />
        <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
        <span className="linkWrapper">
          <a href="mailto:zqe3cg@virginia.edu" className="normalLink">
            zqe3cg@virginia.edu
          </a>
        </span>
        <br />
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <span className="linkWrapper">
          <Href href="https://github.com/AJB117" className="normalLink">
            {" "}
            Github
          </Href>
        </span>
        <br />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <span className="linkWrapper" style={{ marginLeft: "8px" }}>
          <Href
            href="https://www.linkedin.com/in/patrick-soga-5b4118166/"
            className="normalLink"
          >
            {" "}
            Linkedin
          </Href>
        </span>
        <br />
        <FontAwesomeIcon icon="fa-solid fa-file-lines" />
        <span className="linkWrapper" style={{ marginLeft: "12px" }}>
          <a href="cv.pdf" embed="true" target="_blank" className="normalLink">
            CV
          </a>
        </span>
      </p>
    </section>
  )
}

export default Description
