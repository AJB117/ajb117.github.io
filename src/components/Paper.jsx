import React from "react"
import { ConferenceToAbbrev } from "../pages/home/Papers"

const Paper = ({ author, booktitle, title, year, url }) => {
  return (
    <section className="paper">
      <strong>
        <a href={url}>{title}</a>
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
