import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Description = () => {
  return (
    <section className="description">
      <h2 style={{ margin: 0, padding: 0 }} className="name">
        Patrick M. Soga
      </h2>
      <div className="nameText">
        <ruby>
          (曽我 <rt>そが</rt>
        </ruby>{" "}
        パトリック{" "}
        <ruby>
          守杜<rt>もりと</rt>)
        </ruby>
      </div>
      <p>
        Written with <a href="https://www.gatsbyjs.com/">Gatsby.</a>
      </p>
    </section>
  )
}

export default Description
