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
    date: "8.2023 - present",
    credentialOrPlacement: "Ph.D. in Computer Science",
    note: "ML for graphs, geometry, and life/physical sciences.",
    link: "https://www.virginia.edu/",
  },
  {
    name: "University of Notre Dame",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notre_Dame_Fighting_Irish_logo.svg",
    height: 70,
    date: "8.2018 - 12.2022",
    credentialOrPlacement: "B.S. in Computer Science, B.A. in Philosophy",
    note: "Cum Laude, Phi Beta Kappa.",
    link: "https://www.nd.edu/",
  },
]

const experiences = [
  {
    name: "Lucy Family Institute for Data and Society",
    img:
      "https://media.licdn.com/dms/image/C560BAQEUrZ90zcCHLQ/company-logo_200_200/0/1651250071541?e=2147483647&v=beta&t=H7hN7IkmMUPluM3GF2JC8EaaICsPsgO2MUUJ9ntm5uQ",
    height: 80,
    date: "6.2021 - 5.2022",
    credentialOrPlacement: "Software Developer",
    note: "Web and mobile apps for health data management.",
    link: "https://lucyinstitute.nd.edu/about-the-lucy-institute/",
  },
  {
    name: "FloVision Solutions",
    img:
      "https://media.licdn.com/dms/image/C4D0BAQGWzB1C6P0ECQ/company-logo_200_200/0/1659027135104?e=2147483647&v=beta&t=cQSXwjoXxqLkQ1XONf8ujd4kxZS6q_zRoniwaERaYzk",
    height: 80,
    date: "6.2021 - 3.2022",
    credentialOrPlacement: "Contracted Software Engineer",
    note: "Dashboards, deep vision models, and data pipelines.",
    link: "https://flovisionsolutions.com/",
  },
  {
    name: "Million Marker",
    img:
      "https://miro.medium.com/v2/resize:fit:2400/2*XKJVq4s8dZpS3Lfm0oFINg.png",
    height: 80,
    date: "2.2021 - 5.2021",
    credentialOrPlacement: "Software Engineering Intern",
    note: "OCR for product labels.",
    link: "https://www.millionmarker.com/",
  },
  {
    name: "RJ Reliance",
    img:
      "https://media.licdn.com/dms/image/C4E0BAQFl2-HcNov3kg/company-logo_200_200/0/1519868164933?e=2147483647&v=beta&t=bs7LghYDNVe6vPBT_9EyxjcOe0rzdSnxM1RPgFfCwS0",
    height: 80,
    date: "12.2020 - 2.2021",
    credentialOrPlacement: "Software Development Intern",
    note: "Mock data generation and dashboards.",
    link: "https://www.rjreliance.com/",
  },
]

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
  </>
)

export default ExpAndEd
