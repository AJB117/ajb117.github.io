import React from "react"
import YAMLData from "../../../content/content.yml"
import Href from "../../components/Href"
import { Venues, parseString } from "../../util/PapersUtil"

const formatAuthors = authors => {
  const needsOxfordComma = authors.length > 2
  const isLastAuthor = idx => idx === authors.length - 1
  return authors.map((author, idx) => (
    <span key={idx}>
      {isLastAuthor(idx) ? " and " : " "}
      {author.includes("Soga") ? <b>{author}</b> : author}
      {isLastAuthor(idx) || !needsOxfordComma ? "" : ", "}
    </span>
  ))
}

const addCommaIfJournal = venue => {
  return venue.isJournal() ? venue.abbrev + ", " : venue.abbrev
}

const Paper = ({ authors, booktitle, title, year, url }) => {
  return (
    <section className="paper">
      <strong>
        <Href href={url}>{title}</Href>
      </strong>
      <section>{authors}</section>
      <section>
        {booktitle} {year}
        {". "}
        {title ===
          "Bridging Graph Position Encodings for Transformers with Weighted Graph-Walking Automata" ||
        title === "Deep Ensembles for Graphs with Higher-Order Dependencies" ? (
          <>To appear.</>
        ) : null}
      </section>
    </section>
  )
}

const Papers = () => {
  const papers = YAMLData.papers.split(/(?=@)/).map((paperString, idx) => {
    let { authors, booktitle, title, year, url } = parseString(paperString)
    const venue = Venues.filter(venue => venue.name === booktitle)[0]

    return {
      authors: formatAuthors(authors),
      booktitle: addCommaIfJournal(venue),
      title,
      year,
      url,
    }
  })

  return (
    <section className="papers">
      <h2>Papers</h2>
      {papers.map((paper, idx) => (
        <Paper key={idx} {...paper} />
      ))}
    </section>
  )
}

export default Papers
