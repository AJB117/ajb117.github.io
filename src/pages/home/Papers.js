import React from "react"
import YAMLData from "../../../content/content.yml"
import { toJSON } from "@orcid/bibtex-parse-js"
import Paper from "../../components/Paper"

export const ConferenceToAbbrev = Object.freeze({
  arXiv: "arXiv",
  "International Conference on Machine Learning": "ICML",
  "International Conference on Learning Representations": "ICLR",
  "Conference on Neural Information Processing Systems": "NeurIPS",
  "International Conference on Computer Vision": "ICCV",
  "Conference on Computer Vision and Pattern Recognition": "CVPR",
  "European Conference on Computer Vision": "ECCV",
  "Association for the Advancement of Artificial Intelligence": "AAAI",
  "International Joint Conference on Artificial Intelligence": "IJCAI",
  "Annual Meeting of the Association for Computational Linguistics": "ACL",
  "Conference on Empirical Methods in Natural Language Processing": "EMNLP",
  "North American Chapter of the Association for Computational Linguistics":
    "NAACL",
  "International Conference on Acoustics, Speech, and Signal Processing":
    "ICASSP",
  "International Conference on Image Processing": "ICIP",
  "International Conference on Data Mining": "ICDM",
  "Knowledge Discovery and Data Mining": "KDD",
  "International ACM SIGIR Conference on Research and Development in Information Retrieval":
    "SIGIR",
  "International World Wide Web Conference": "WWW",
})

const convertLFToFL = name => {
  if (name.includes(",")) {
    const nameArray = name.split(",")
    return nameArray[1].trim() + " " + nameArray[0]
  }
  return name
}

const joinAuthors = authorArr => {
  let authorString = ""
  for (let i = 0; i < authorArr.length; i++) {
    if (i === authorArr.length - 1) {
      authorString += authorArr[i]
    } else {
      authorString += authorArr[i] + ", "
    }
    if (authorArr.length > 2 && i === authorArr.length - 2) {
      authorString += "and "
    }
  }
  return authorString
}

const parsePaperJSON = ({ author, booktitle, title, year, url }) => {
  if (booktitle === undefined) {
    booktitle = "arXiv"
  }
  let fixedAuthors = author.split(" and ")
  fixedAuthors = fixedAuthors.map(convertLFToFL)

  author = joinAuthors(fixedAuthors)

  return {
    author,
    booktitle,
    title,
    year,
    url,
  }
}

const parseString = string => {
  const paperJSON = toJSON(string)[0].entryTags
  const paperContent = parsePaperJSON(paperJSON)
  return paperContent
}

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
