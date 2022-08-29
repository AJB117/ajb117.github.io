import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Interests = () => {
  return (
    <section className="interests">
      <section>
        I'm a senior at the{" "}
        <a href="https://nd.edu">University of Notre Dame </a>
        studying <a href="http://cse.nd.edu/">CS</a> and{" "}
        <a href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/">
          philosophy
        </a>
        .<p></p>
        <section className="interests">
          {" "}
          <div>
            I'm interested in graph ML, NLP, and their intersection. More
            specifically, I'm interested in graph deep learning and applying
            graph ML methods for NLP tasks like knowledge-aware NMT and
            question-answering.{" "}
          </div>{" "}
        </section>
      </section>
    </section>
  )
}

export default Interests
