import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      I'm a first-year PhD student at the University of Virginia's{" "}
      <Href href="https://engineering.virginia.edu/departments/computer-science/">
        CS department
      </Href>{" "}
      currently advised by{" "}
      <Href href="https://jundongli.github.io">Prof. Jundong Li</Href>. My
      interests are broadly in machine learning on graphs and its applications.
    </p>
    <p>
      I did my undergrad at the{" "}
      <Href href="https://nd.edu">University of Notre Dame </Href>
      where I received degrees in <Href href="https://cse.nd.edu/">
        CS
      </Href> and{" "}
      <Href href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/">
        philosophy of math/logic
      </Href>{" "}
      and worked under professors{" "}
      <Href href="https://niteshchawla.nd.edu/">Nitesh Chawla</Href> and{" "}
      <Href href="https://www3.nd.edu/~dchiang/">David Chiang</Href>.
    </p>
  </section>
)

export default Interests
