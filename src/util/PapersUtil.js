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

class Venue {
  constructor(name, abbrev) {
    this.name = name
    this.abbrev = abbrev
  }

  isConference() {
    return Conferences.has(this.name)
  }

  isJournal() {
    return Journals.has(this.name)
  }
}

export const Venues = [
  new Venue("arXiv", "Preprint"),
  new Venue("coRR", "Preprint"),
  new Venue("International Conference on Machine Learning", "ICML"),
  new Venue("International Conference on Learning Representations", "ICLR"),
  new Venue("Conference on Neural Information Processing Systems", "NeurIPS"),
  new Venue("International Conference on Computer Vision", "ICCV"),
  new Venue("Conference on Computer Vision and Pattern Recognition", "CVPR"),
  new Venue("European Conference on Computer Vision", "ECCV"),
  new Venue(
    "Association for the Advancement of Artificial Intelligence",
    "AAAI"
  ),
  new Venue(
    "International Joint Conference on Artificial Intelligence",
    "IJCAI"
  ),
  new Venue(
    "Annual Meeting of the Association for Computational Linguistics",
    "ACL"
  ),
  new Venue(
    "Conference on Empirical Methods in Natural Language Processing",
    "EMNLP"
  ),
  new Venue(
    "North American Chapter of the Association for Computational Linguistics",
    "NAACL"
  ),
  new Venue(
    "International Conference on Acoustics, Speech, and Signal Processing",
    "ICASSP"
  ),

  new Venue("International Conference on Image Processing", "ICIP"),
  new Venue("International Conference on Data Mining", "ICDM"),
  new Venue("Knowledge Discovery and Data Mining", "KDD"),
  new Venue(
    "International ACM SIGIR Conference on Research and Development in Information Retrieval",
    "SIGIR"
  ),
  new Venue("International World Wide Web Conference", "WWW"),
  new Venue(
    "Transactions on Pattern Analysis and Machine Intelligence",
    "TPAMI"
  ),
  new Venue("Transactions on Machine Learning Research", "TMLR"),
]

const convertLFToFL = name => {
  if (name.includes(",")) {
    const nameArray = name.split(",")
    return nameArray[1].trim() + " " + nameArray[0]
  }
  return name
}

export const parseBibTeX = bibtex => {
  const entries = []
  let currentEntry = null

  bibtex.split(/\r?\n/).forEach(line => {
    if (line.startsWith("@")) {
      const type = line.split("{")[0].substring(1)
      const key = line.split("{")[1].split("}")[0]
      currentEntry = { type, key }
      entries.push(currentEntry)
    } else if (line.startsWith("}")) {
      currentEntry = null
    } else if (currentEntry) {
      const [name, value] = line.split("=").map(s => s.trim())
      currentEntry[name] = value
        .replace(/^{/, "")
        .replace(/,$/, "")
        .replace(/}$/, "")
    }
  })

  return entries
}

export const preprocessPapers = ({
  author,
  booktitle,
  title,
  year,
  url,
  codeUrl,
}) => {
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
    codeUrl,
  }
}
