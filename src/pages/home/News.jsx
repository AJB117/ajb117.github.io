import React from "react"
import Href from "../../components/Href"
import "../../styles/home.css"
import "../../styles/global.css"

const NewsEntries = [
  {
    date: "Mar 2023",
    text: (
      <>
        {/* Our paper,{" "}
        <Href href="https://arxiv.org/pdf/2212.06898.pdf">
          "Bridging Graph Position Encodings for Transformers with Weighted
          Graph-Walking Automata"
        </Href>{" "}
        (<b>Patrick Soga</b> and David Chiang), has been accepted to
        Transactions on Machine Learning Research (TMLR). */}
        One <Href href="https://arxiv.org/pdf/2212.06898.pdf">paper</Href> on
        using graph automata to compute positional encodings for graph
        transformers has been accepted to Transactions on Machine Learning
        Research (TMLR). My first first-author paper!
        {/* (๑•̀ㅂ•́)و✧ */}
      </>
    ),
  },
  {
    date: "Jan 2023",
    text: (
      <>
        {/* Our paper,{" "}
        <Href href="https://arxiv.org/pdf/2205.13988.pdf">
          "Deep Ensembles for Graphs with Higher-order Dependencies"
        </Href>{" "}
        (Steven Krieg, William Burgis, <b>Patrick Soga</b>, and Nitesh Chawla),
        has been accepted ICLR 2023. */}
        One <Href href="https://arxiv.org/pdf/2205.13988.pdf">paper</Href> on
        using deep ensembles for{" "}
        <Href href="https://www.science.org/doi/10.1126/sciadv.1600028">
          higher-order networks
        </Href>{" "}
        has been accepted to ICLR 2023.
      </>
    ),
  },
  {
    date: "Jan 2023",
    text: (
      <>
        Graduated Cum Laude from{" "}
        <Href href="https://www.nd.edu/">Notre Dame</Href> with degrees in{" "}
        <Href href="https://cse.nd.edu/">computer science</Href> and{" "}
        <Href href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/">
          philosophy
        </Href>
        .
      </>
    ),
  },
]

const News = () => (
  <section className="news">
    <h2>News</h2>
    <ul>
      {NewsEntries.slice(0, 8).map((newsEntry, idx) => (
        <>
          <div className="newsDate">{newsEntry.date}</div>
          <div className="newsText">
            <em>{newsEntry.text}</em>
          </div>
        </>
      ))}
    </ul>
  </section>
)

export default News
