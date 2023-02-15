import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"

const Interests = () => {
  return (
    <section className="interests">
      <p>
        I'm an incoming CS PhD student at [university] advised by [professor].
        My interests are in graph ML and its applications. I also have some
        experience in web development.
      </p>
      <p>
        I did my undergrad at the{" "}
        <a href="https://nd.edu">University of Notre Dame </a>
        with degrees in <a href="http://cse.nd.edu/">CS</a> and{" "}
        <a href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/">
          philosophy
        </a>{" "}
        where I was graciously advised by Dr. Nitesh Chawla and Dr. David
        Chiang. I'm originally from Torrance, CA.
      </p>
    </section>
  )
}

export default Interests
