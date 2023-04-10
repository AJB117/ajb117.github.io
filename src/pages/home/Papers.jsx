import React from "react"
import YAMLData from "../../../content/content.yml"
import Href from "../../components/Href"
import { Venues, parseString } from "../../util/PapersUtil"

const parseBibTeX = bibtex => {
  let entries = []
  let currentEntry = null

  const lines = bibtex.trim().split(/\r?\n/)
  console.log(lines)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().replace(",", "")

    if (line.startsWith("@")) {
      // New entry
      const type = line.split("{")[0].substring(1)
      const key = line.split("{")[1].split("}")[0]
      currentEntry = { type, key }
      entries.push(currentEntry)
    } else if (line.startsWith("}")) {
      // End of entry
      currentEntry = null
    } else if (currentEntry) {
      // Field
      const [name, value] = line.split("=").map(s => s.trim())
      currentEntry[name] = value.replace(/^{/, "").replace(/}$/, "")
    }
  }

  return entries
}

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

const Paper = ({ authors, booktitle, title, year, url, codeUrl }) => {
  return (
    <section className="paper">
      {title}
      <section>{authors}</section>
      <section>
        {booktitle} {year}
        {". "}
        {title ===
        "Deep Ensembles for Graphs with Higher-Order Dependencies" ? (
          <>To appear.</>
        ) : null}
        <Href className="paperLink" href={codeUrl}>
          Code
        </Href>
        <Href className="paperLink" href={url}>
          arXiv
        </Href>
      </section>
    </section>
  )
}

const Papers = () => {
  const papers = YAMLData.papers.split(/(?=@)/).map((paperString, idx) => {
    let { authors, booktitle, title, year, url, codeUrl } = parseString(
      paperString
    )
    const venue = Venues.find(venue => venue.name === booktitle)

    return {
      authors: formatAuthors(authors),
      booktitle: addCommaIfJournal(venue),
      title,
      year,
      url,
      codeUrl,
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
