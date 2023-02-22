import React from "react"
import YAMLData from "../../../content/content.yml"
import Paper from "../../components/Paper"
import { parseString } from "../../util/PapersUtil"

const Papers = () => (
  <section className="papers">
    <h2>Papers</h2>
    {YAMLData.papers.split(/(?=@)/).map((paperString, idx) => {
      return <Paper {...parseString(paperString)} key={idx} />
    })}
  </section>
)

export default Papers
