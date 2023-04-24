import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      I'm an incoming CS PhD student to the{" "}
      <Href href="https://www.virginia.edu/" className="normalLink">
        University of Virginia
      </Href>{" "}
      . My interests are broadly in machine learning on graphs and its
      applications.
    </p>
    <p>
      I recently graduated from the{" "}
      <Href href="https://nd.edu" className="normalLink">
        University of Notre Dame{" "}
      </Href>
      with degrees in{" "}
      <Href href="https://cse.nd.edu/" className="normalLink">
        CS
      </Href>{" "}
      and{" "}
      <Href
        href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/"
        className="normalLink"
      >
        philosophy
      </Href>
      .
    </p>
  </section>
)

export default Interests
