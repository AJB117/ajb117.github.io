import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      I am an incoming CS PhD student to the{" "}
      <Href href="http://www.virginia.edu/" className="normalLink">
        University of Virginia{" "}
      </Href>{" "}
      to be advised by{" "}
      <Href href="http://www.ece.virginia.edu/~jl6qk/" className="normalLink">
        Prof. Jundong Li
      </Href>
      . My research interests are broadly in machine learning on graphs and its
      applications.
    </p>
    <p>
      Earlier, I did my undergrad at the{" "}
      <Href href="https://nd.edu" className="normalLink">
        University of Notre Dame{" "}
      </Href>
      with degrees in CS and philosophy where I was graciously advised by{" "}
      <Href href="https://www3.nd.edu/~dchiang/" className="normalLink">
        Prof. David Chiang{" "}
      </Href>{" "}
      and{" "}
      <Href href="https://niteshchawla.nd.edu/" className="normalLink">
        Prof. Nitesh Chawla.
      </Href>
    </p>
  </section>
)

export default Interests
