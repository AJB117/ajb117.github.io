import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => (
  <section className="interests">
    <p>
      My interests are in graph ML and its applications. I am currently applying
      to AI/ML PhD programs.
    </p>
    <p>
      I recently graduated from the{" "}
      <Href href="https://nd.edu" className="normalLink">
        University of Notre Dame{" "}
      </Href>
      with degrees in{" "}
      <Href href="https://cse.nd.edu/" className="normalLink">
        CS
      </Href>{" "}
      and{" "}
      <Href
        href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/"
        className="normalLink"
      >
        philosophy
      </Href>
      .
    </p>
    {/* <p>
      I did my undergrad at the{" "}
      <Href href="https://nd.edu">University of Notre Dame </Href>
      where I was graciously advised by{" "}
      <Href href="https://niteshchawla.nd.edu/">
        Dr. Nitesh Chawla
      </Href> and{" "}
      <Href href="https://www3.nd.edu/~dchiang/">Dr. David Chiang</Href>. I
      studied <Href href="https://cse.nd.edu/">CS</Href> and{" "}
      <Href href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/">
        philosophy
      </Href>
      , focusing on the philosophy of math and logic.
    </p>{" "} */}
    {/* <p>
      <Href href="https://yugiohblog.konami.com/2012/03/dragon-duel-round-1-roundup/">
        My proudest moment.
      </Href>
    </p> */}
  </section>
)

export default Interests
