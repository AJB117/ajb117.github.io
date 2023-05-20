import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      I'm an incoming CS PhD student to the{" "}
      <Href href="https://www.virginia.edu/">University of Virginia</Href> to be
      advised by{" "}
      <Href href="http://www.ece.virginia.edu/~jl6qk/">Prof. Jundong Li</Href>.
      My interests are broadly in machine learning on graphs and its
      applications.
    </p>
    <p>
      I did my undergrad at the{" "}
      <Href href="https://nd.edu">University of Notre Dame </Href>
      where I received degrees in <Href href="https://cse.nd.edu/">
        CS
      </Href> and{" "}
      <Href href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/">
        philosophy
      </Href>{" "}
      and worked under Professors{" "}
      <Href href="https://niteshchawla.nd.edu/">Nitesh Chawla</Href> and{" "}
      <Href href="https://www3.nd.edu/~dchiang/">David Chiang</Href>.
    </p>
  </section>
)

export default Interests
