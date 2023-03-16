import { toJSON } from "@orcid/bibtex-parse-js"

export const VenueToAbbrev = Object.freeze({
  arXiv: "Preprint",
  coRR: "Preprint",
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
  "Transactions on Pattern Analysis and Machine Intelligence": "TPAMI",
  "Transactions on Machine Learning Research": "TMLR",
})

export const Journals = new Set([
  "IEEE Transactions on Pattern Analysis and Machine Intelligence",
  "Transactions on Machine Learning Research",
])

export const Conferences = new Set([
  "International Conference on Machine Learning",
  "International Conference on Learning Representations",
  "Conference on Neural Information Processing Systems",
  "International Conference on Computer Vision",
  "Conference on Computer Vision and Pattern Recognition",
  "European Conference on Computer Vision",
  "Association for the Advancement of Artificial Intelligence",
  "International Joint Conference on Artificial Intelligence",
  "Annual Meeting of the Association for Computational Linguistics",
  "Conference on Empirical Methods in Natural Language Processing",
  "North American Chapter of the Association for Computational Linguistics",
  "International Conference on Acoustics, Speech, and Signal Processing",
  "International Conference on Image Processing",
  "International Conference on Data Mining",
  "Knowledge Discovery and Data Mining",
  "International ACM SIGIR Conference on Research and Development in Information Retrieval",
  "International World Wide Web Conference",
])

export class Venue {
  constructor(name) {
    this.name = name
    this.abbrev = VenueToAbbrev[name]
  }

  isConference() {
    return Conferences.has(this.name)
  }

  isJournal() {
    return Journals.has(this.name)
  }
}

const convertLFToFL = name => {
  if (name.includes(",")) {
    const nameArray = name.split(",")
    return nameArray[1].trim() + " " + nameArray[0]
  }
  return name
}

const parsePaperJSON = ({ author, booktitle, title, year, url }) => {
  if (booktitle === undefined) {
    booktitle = "Preprint"
  }

  const authors = author.split(" and ").map(convertLFToFL)

  return {
    authors,
    booktitle,
    title,
    year,
    url,
  }
}

export const parseString = string => {
  const paperJSON = toJSON(string)[0].entryTags
  const paperContent = parsePaperJSON(paperJSON)
  return paperContent
}
