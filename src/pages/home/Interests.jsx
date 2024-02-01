import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      I'm a first-year CS PhD student at the{" "}
      <Href href="https://www.virginia.edu">University of Virginia</Href>{" "}
      advised by{" "}
      <Href href="https://jundongli.github.io">Prof. Jundong Li</Href>. My
      research interests are broadly in machine learning on graphs, geometric
      deep learning, and AI for science.
    </p>
    <p>
      Previously, I did my undergrad at the{" "}
      <Href href="https://nd.edu">University of Notre Dame </Href>
      where I studied CS & philosophy of math/logic and worked under professors{" "}
      <Href href="https://niteshchawla.nd.edu/">Nitesh Chawla</Href> and{" "}
      <Href href="https://www3.nd.edu/~dchiang/">David Chiang</Href>.
    </p>
  </section>
)

export default Interests
