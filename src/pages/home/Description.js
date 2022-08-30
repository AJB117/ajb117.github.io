import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Email from "./Email"

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
          (曽我 <rt>そが</rt>
        </ruby>{" "}
        パトリック{" "}
        <ruby>
          守杜<rt>もりと</rt>)
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
        <Email />
      </p>
      <p>
        Written with <a href="https://www.gatsbyjs.com/">Gatsby.</a>
      </p>
    </section>
  )
}

export default Description
