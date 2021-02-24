import React from "react"
import { graphql } from "gatsby"
import TopBar from "../components/TopBar"
import './blogPostTemplate.css'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <TopBar/>
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="blog-post-header">
            <h2>{frontmatter.title}</h2>
            <h3>{frontmatter.date}</h3>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
