import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import { Helmet } from "react-helmet"

const Interests = () => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Patrick Soga" />
      </Helmet>
      <p></p>
      <section className="interests">
        <div>
          I'm interested in graph ML, NLP, and their intersection. More
          specifically, I'm interested in graph deep learning and applying graph
          ML methods for NLP tasks like knowledge-aware NMT and
          question-answering.
        </div>
      </section>
    </>
  )
}

export default Interests
