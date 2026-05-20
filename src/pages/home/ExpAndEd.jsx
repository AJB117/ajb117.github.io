import React from "react"
import "../../styles/home.css"
import "../../styles/global.css"
import Href from "../../components/Href"

const educations = [
  {
    name: "University of Virginia",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/University_of_Virginia_Rotunda_logo.svg",
    height: 80,
    date: "08.2023 - present",
    credentialOrPlacement: "Ph.D. in Computer Science",
    note: "ML for graphs, geometry, and scientific discovery.",
    link: "https://www.virginia.edu/",
  },
  {
    name: "University of Notre Dame",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notre_Dame_Fighting_Irish_logo.svg",
    height: 70,
    date: "08.2018 - 12.2022",
    credentialOrPlacement: "B.S. in Computer Science, B.A. in Philosophy",
    note: "Cum Laude, Phi Beta Kappa.",
    link: "https://www.nd.edu/",
  },
]

const experiences = [
  {
    name: "AT&T Labs",
    img:
      "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_3mesl1pl/def_height/2700/def_width/2700/version/100012/type/1",
    height: 55,
    date: "08.2026 - 10.2026",
    credentialOrPlacement: "Incoming Research Intern",
    link: "https://about.att.com/sites/labs",
  },
  {
    name: "AbbVie",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/AbbVie_logo.svg/1280px-AbbVie_logo.svg.png?20230221154959",
    height: 16,
    date: "05.2026 - 08.2026",
    credentialOrPlacement: "Incoming Graph Machine Learning Intern",
    note: "ML on knowledge graphs for drug discovery.",
    link: "https://www.abbvie.com/",
  },
  {
    name: "Lucy Family Institute for Data & Society",
    img:
      "https://media.licdn.com/dms/image/v2/C560BAQEUrZ90zcCHLQ/company-logo_200_200/company-logo_200_200/0/1651250071541?e=2147483647&v=beta&t=jNOyRcgh3LaW-bF6ejeMTMGINANiBbs8oF6rNxQdZgE",
    height: 80,
    date: "06.2021 - 05.2022",
    credentialOrPlacement: "Software Developer",
    note: "Web + mobile apps for health data management.",
    link: "https://lucyinstitute.nd.edu/about-the-lucy-institute/",
  },
  {
    name: "FloVision Solutions",
    img:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGWzB1C6P0ECQ/company-logo_200_200/company-logo_200_200/0/1659027135493/flovisionsolutions_logo?e=2147483647&v=beta&t=RDhlokAbP8yYyjbgP8KafxIjJaADHkDj9COCar2W3L4",
    height: 80,
    date: "06.2021 - 03.2022",
    credentialOrPlacement: "Contracted Software Engineer",
    note: "Dashboards, deep vision models, and pipelines.",
    link: "https://flovisionsolutions.com/",
  },
  {
    name: "Million Marker",
    img:
      "https://miro.medium.com/v2/resize:fit:2400/2*XKJVq4s8dZpS3Lfm0oFINg.png",
    height: 80,
    date: "02.2021 - 05.2021",
    credentialOrPlacement: "Software Engineering Intern",
    note: "OCR for product labels.",
    link: "https://www.millionmarker.com/",
  },
  //   {
  //     name: "RJ Reliance",
  //     img:
  //       "https://media.licdn.com/dms/image/C4E0BAQFl2-HcNov3kg/company-logo_200_200/0/1519868164933?e=2147483647&v=beta&t=bs7LghYDNVe6vPBT_9EyxjcOe0rzdSnxM1RPgFfCwS0",
  //     height: 60,
  //     date: "12.2020 - 02.2021",
  //     credentialOrPlacement: "Software Development Intern",
  //     note: "Mock data generation and dashboards.",
  //     link: "https://www.rjreliance.com/",
  //   },
]

const services = [
  {
    name: "Reviewer (invited + external)",
    note:
      "ICML 2025-2026, ICLR 2026, WWW 2025, KDD 2024-2025, IJCAI 2024, WSDM 2024, TMLR, and others.",
  },
]

const teachings = [
  {
    name: "Teaching Assistant",
    note: [
      "CS 4774 Machine Learning, Spring 2025, 2026",
      "CS 6316 Machine Learning, Fall 2025",
    ],
  },
  //   {
  //     name: "Guest Lecturer",
  //     note: [
  //       "CS 6316 Machine Learning, Fall 2025. Generative models.",
  //       "CS 6501 Graph Machine Learning, Spring 2025. Generative graph models.",
  //     ],
  //   },
]

const TeachingService = ({ name, date, note }) => {
  const note_section = Array.isArray(note)
    ? note.map((item, index) => <div key={index}>{item}</div>)
    : note
  return (
    <li>
      <div style={{ flexGrow: 1 }}>
        <div className="exp-and-ed-name-date">
          <h3 style={{ margin: "0 0 5px" }}>{name}</h3>
          <div>{date}</div>
        </div>
        <div>{note_section}</div>
      </div>
    </li>
  )
}

const ExpOrEd = ({
  name,
  img,
  height,
  date,
  credentialOrPlacement,
  note,
  link,
}) => {
  return (
    <li>
      <a href={link} target={"_blank"}>
        <img src={img} height={height} />
      </a>
      <div style={{ flexGrow: 1 }}>
        <div className="exp-and-ed-name-date">
          <h3 style={{ margin: "0 0 5px" }}>{name}</h3>
          <div>{date}</div>
        </div>
        <div>
          {credentialOrPlacement}
          <br />
          <em>{note}</em>
        </div>
      </div>
    </li>
  )
}

const ExpAndEd = () => (
  <>
    <div className="exp-and-ed">
      <h2>Education</h2>
      <ul>
        {educations.map(education => (
          <ExpOrEd {...education} />
        ))}
      </ul>
    </div>
    <div className="exp-and-ed">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map(experience => (
          <ExpOrEd {...experience} />
        ))}
      </ul>
    </div>
    <div className="exp-and-ed">
      <h2>Teaching &#38; Service</h2>
      <ul>
        {teachings.concat(services).map(x => (
          <TeachingService {...x} />
        ))}
      </ul>
    </div>
  </>
)

export default ExpAndEd
