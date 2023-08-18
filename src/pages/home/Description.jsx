import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Description = () => {
  const [showName, setShowName] = React.useState(false)
  return (
    <div className="description">
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
      <h1
        style={{ margin: 0, padding: 0 }}
        className="name"
        onMouseEnter={() => setShowName(!showName)}
        onMouseLeave={() => setShowName(!showName)}
      >
        Patrick Soga
      </h1>
    </div>
  )
}

export default Description
