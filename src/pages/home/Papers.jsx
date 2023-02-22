import React from "react"
import YAMLData from "../../../content/content.yml"
import Paper from "../../components/Paper"
import { parseString } from "../../util/PapersUtil"

const Papers = () => {
  return (
    <section className="papers">
      <h2>Papers</h2>
      {YAMLData.hi.split(/(?=@)/).map((paper, idx) => {
        return <Paper {...parseString(paper)} key={idx} />
      })}
    </section>
  )
}

export default Papers
