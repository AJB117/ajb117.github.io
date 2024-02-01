import React from "react"
import YAMLData from "../../../content/content.yml"
import Href from "../../components/Href"
import { Venues, parseBibTeX, preprocessPapers } from "../../util/PapersUtil"
import { faCopy } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

const Paper = ({ authors, booktitle, title, year, url, codeUrl, bibtex }) => {
  const [showBibtex, setShowBibtex] = React.useState(false)
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
          code
        </Href>
        <button
          className="paperLink"
          style={{ backgroundColor: "white", cursor: "pointer" }}
          onClick={() => setShowBibtex(prev => !prev)}
        >
          BibTeX
        </button>
      </section>
      {showBibtex && (
        <>
          <pre
            style={{
              overflowX: "scroll",
              backgroundColor: "#D0D0D0",
              padding: "4px",
            }}
          >
            {bibtex}
            <button
              className="paperLink"
              style={{
                backgroundColor: "white",
                cursor: "pointer",
                float: "right",
                marginBottom: "0px",
              }}
            >
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => {
                  navigator.clipboard.writeText(bibtex)
                }}
              />
            </button>
          </pre>
        </>
      )}
    </section>
  )
}

const Papers = () => {
  const paperStrings = YAMLData.papers.split("\n\n").map(paper => paper.trim())
  let papers = parseBibTeX(YAMLData.papers)
    .map(preprocessPapers)
    .map((paper, idx) => ({
      ...paper,
      authors: formatAuthors(paper.authors),
      booktitle:
        Venues.find(venue => venue.name === paper.booktitle).abbrev + ", ",
      bibtex: paperStrings[idx],
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
