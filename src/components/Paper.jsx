import React from "react"
import { ConferenceToAbbrev } from "../util/PapersUtil"
import Href from "./Href"

const Paper = ({ author, booktitle, title, year, url }) => {
  return (
    <section className="paper">
      <strong>
        <Href href={url}>{title}</Href>
      </strong>
      <section>{author}</section>
      <section>
        {booktitle in ConferenceToAbbrev
          ? ConferenceToAbbrev[booktitle]
          : booktitle}{" "}
        {year}.
      </section>
    </section>
  )
}

export default Paper
