import React from "react"
import Href from "./Href"
import { VenueToAbbrev, Venues } from "../util/PapersUtil"

const Authors = ({ authors }) => {
  const needsOxfordComma = authors.length > 2
  const isLastAuthor = idx => idx === authors.length - 1

  return (
    <span>
      {authors.map((author, idx) => (
        <span key={idx}>
          {isLastAuthor(idx) ? " and " : " "}
          {author.includes("Soga") ? <b>{author}</b> : author}
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
      {booktitle in VenueToAbbrev ? VenueToAbbrev[booktitle] : booktitle}
      {Venues.filter(venue => venue.isJournal())
        .map(venue => venue.name)
        .includes(booktitle)
        ? ", "
        : " "}
      {year}.{" "}
      {title ===
        "Bridging Graph Position Encodings for Transformers with Weighted Graph-Walking Automata" ||
      title === "Deep Ensembles for Graphs with Higher-Order Dependencies" ? (
        <>To appear.</>
      ) : null}
    </section>
  </section>
)

export default Paper
