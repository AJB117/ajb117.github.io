import React from "react"
import Href from "../../components/Href"
import "../../styles/home.css"
import "../../styles/global.css"

const NewsEntries = [
  {
    date: "Mar 2023",
    text: (
      <>
        Joined the <Href href="http://aiactionlab.com/">MSU ACTION Lab</Href> as
        a PhD student advised by{" "}
        <Href href="https://www.egr.msu.edu/~yukong/">Dr. Yu Kong</Href>.
      </>
    ),
  },
  {
    date: "Feb 2023",
    text: (
      <>
        Received the University Enrichment Fellowship from Michigan State
        University (1 of 20 out of ~500 PhD students). Thank you MSU!
      </>
    ),
  },
  {
    date: "Jan 2023",
    text: (
      <>
        Our paper,{" "}
        <Href href="https://openreview.net/forum?id=hZftxQGJ4Re">
          "Deep Ensembles for Graphs with Higher-order Dependencies"
        </Href>{" "}
        (Steven Krieg, William Burgis, <b>Patrick Soga</b>, and Nitesh Chawla),
        has been accepted ICLR 2023.
      </>
    ),
  },
  {
    date: "Jan 2023",
    text: (
      <>
        Graduated Cum Laude from Notre Dame with degrees in Computer Science and
        Philosophy.
      </>
    ),
  },
  {
    date: "Dec 2022",
    text: (
      <>
        New <Href href="https://arxiv.org/abs/2212.06898">preprint</Href> on
        using graph-walking automata for graph positional encodings available on
        arXiv.
      </>
    ),
  },
]

const News = () => (
  <section className="news">
    <h2>News</h2>
    <ul>
      {NewsEntries.slice(0, 8).map((newsEntry, idx) => (
        <li key={idx}>
          [{newsEntry.date}] <em>{newsEntry.text}</em>
        </li>
      ))}
    </ul>
  </section>
)

export default News
