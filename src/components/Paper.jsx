import React from "react"
import { ConferenceToAbbrev } from "../util/PapersUtil"
import Href from "./Href"

const Authors = ({ authors }) => {
  const needsOxfordComma = authors.length > 2
  const isLastAuthor = idx => idx === authors.length - 1

  return (
    <span>
      {authors.map((author, idx) => (
        <span key={idx}>
          {isLastAuthor(idx) ? " and " : " "}
          {author.includes("Patrick Soga") ? <b>{author}</b> : author}
          {isLastAuthor(idx) || !needsOxfordComma ? "" : ", "}
        </span>
      ))}
    </span>
  )
}

const Paper = ({ authors, booktitle, title, year, url }) => (
  <section className="paper">
    <strong>
      <Href href={url}>{title}</Href>
    </strong>
    <section>
      <Authors authors={authors} />
    </section>
    <section>
      {booktitle in ConferenceToAbbrev
        ? ConferenceToAbbrev[booktitle]
        : booktitle}{" "}
      {year}.
    </section>
  </section>
)

export default Paper
