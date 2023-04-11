import React from "react"
import Href from "../../components/Href"
import "../../styles/home.css"
import "../../styles/global.css"

const NewsEntries = [
  {
    date: "Apr 2023",
    text: (
      <>
        I decided to join the{" "}
        <Href href="http://www.virginia.edu/" className="normalLink">
          University of Virginia{" "}
        </Href>{" "}
        as a PhD student advised by{" "}
        <Href href="http://www.ece.virginia.edu/~jl6qk/" className="normalLink">
          Prof. Jundong Li
        </Href>
        .
      </>
    ),
  },
  {
    date: "Mar 2023",
    text: (
      <>
        {/* One{" "}
        <Href
          href="https://arxiv.org/pdf/2212.06898.pdf"
          className="normalLink"
        >
          paper
        </Href>{" "}
        on using graph automata to compute positional encodings for graph
        transformers has been accepted to Transactions on Machine Learning
        Research (TMLR). */}
        My first first-author{" "}
        <Href href="https://arxiv.org/abs/2212.06898" className="normalLink">
          paper
        </Href>{" "}
        has been accepted to Transactions on Machine Learning Research (TMLR)!
        (๑•̀ㅂ•́)و✧
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
        A{" "}
        <Href href="https://arxiv.org/abs/2205.13988" className="normalLink">
          paper
        </Href>{" "}
        on using deep ensembles for{" "}
        <Href
          href="https://www.science.org/doi/10.1126/sciadv.1600028"
          className="normalLink"
        >
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
        <Href href="https://www.nd.edu/" className="normalLink">
          Notre Dame
        </Href>{" "}
        with degrees in{" "}
        <Href href="https://cse.nd.edu/" className="normalLink">
          computer science
        </Href>{" "}
        and{" "}
        <Href
          href="https://philosophy.nd.edu/majors-minors/philosophy-science-and-mathematics/major-concentration/"
          className="normalLink"
        >
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
