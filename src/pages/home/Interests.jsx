import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const Interests = () => {
  return (
    <section className="interests">
      <p>
        I'm an incoming CS PhD student at{" "}
        <Href href="https://msu.edu/">Michigan State University</Href> advised
        by <Href href="https://www.egr.msu.edu/~yukong/">Dr. Yu Kong</Href>. My
        interests are in vision-language modeling and visual question answering.
        I also have an interest in deep learning on graphs and its applications.
      </p>
      <p>
        I did my undergrad at the{" "}
        <Href href="https://nd.edu">University of Notre Dame </Href>
        where I was graciously advised by{" "}
        <Href href="https://niteshchawla.nd.edu/">
          Dr. Nitesh Chawla
        </Href> and{" "}
        <Href href="https://www3.nd.edu/~dchiang/">Dr. David Chiang</Href>.
      </p>
      <p>
        <Href href="https://yugiohblog.konami.com/2012/03/dragon-duel-round-1-roundup/">
          My proudest moment.
        </Href>
      </p>
    </section>
  )
}

export default Interests
