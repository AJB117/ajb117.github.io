import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Description = () => {
  return (
    <section className="description">
      <h2 style={{ margin: 0, padding: 0 }} className="name">
        Patrick M. Soga
        <div className="nameText">
          <ruby>
            (曽我 <rt>そが</rt>
          </ruby>{" "}
          パトリック{" "}
          <ruby>
            守杜<rt>もりと</rt>)
          </ruby>
        </div>
      </h2>
      {/* <h3 style={{ margin: 0, padding: 0 }}> */}
      {/* <ruby>
          (曽我 <rt>そが</rt> 守杜<rt>もりと</rt>)
        </ruby> */}
      {/* </h3> */}
      <p>
        Written with <a href="https://www.gatsbyjs.com/">Gatsby.</a>
      </p>
    </section>
  )
}

export default Description
