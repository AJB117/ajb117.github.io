import React from "react"
import { graphql } from "gatsby"
import "./blogPostTemplate.css"
import "../styles/global.css"
import "katex/dist/katex.min.css"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
  data: {
    mdx: { frontmatter, body },
  },
}) {
  return (
    <section>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
        <title>{frontmatter.title}</title>
      </Helmet>
      <Layout inBlogPost={true}>
        <section className="blog-post-container page">
          <section className="blog-post-header">
            <h2>{frontmatter.title}</h2>
            <h3>{frontmatter.date}</h3>
          </section>
          <section className="blog-post-content">
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </section>
      </Layout>
    </section>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
