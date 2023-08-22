import React from "react"
import YAMLData from "../../../content/content.yml"
import Href from "../../components/Href"
import { Venues, parseBibTeX, preprocessPapers } from "../../util/PapersUtil"

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

const Paper = ({ authors, booktitle, title, year, url, codeUrl }) => {
  return (
    <section className="paper">
      {title}
      <section>{authors}</section>
      <section>
        {booktitle} {year}
        {". "}
        <Href className="paperLink" href={url}>
          arXiv
        </Href>
        <Href className="paperLink" href={codeUrl}>
          Code
        </Href>
      </section>
    </section>
  )
}

const Papers = () => {
  let papers = parseBibTeX(YAMLData.papers)
    .map(preprocessPapers)
    .map(paper => ({
      ...paper,
      authors: formatAuthors(paper.authors),
      booktitle:
        Venues.find(venue => venue.name === paper.booktitle).abbrev + ", ",
    }))

  return (
    <section className="papers">
      <h2>Publications</h2>
      {papers.map((paper, idx) => (
        <Paper key={idx} {...paper} />
      ))}
    </section>
  )
}

export default Papers
