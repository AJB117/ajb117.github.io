import React from "react"
import { graphql, navigate } from "gatsby"
import "../../styles/blog.css"
import "../../styles/global.css"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { CardActionArea } from "@material-ui/core"
import Layout from "../../components/Layout"
import { Helmet } from "react-helmet"
import { isMobile } from "react-device-detect"

const Blog = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <>
      <Helmet>
        <meta name="author" content="Patrick Soga, AJB117" />
        <title>AJB117 Blog</title>
      </Helmet>
      <Layout>
        <section className="blog-front page">
          {edges.map((edge, idx) => (
            <Card key={idx} className="blog-card" elevation={isMobile ? 4 : 0}>
              <CardActionArea
                onClick={() => {
                  navigate(edge.node.frontmatter.slug)
                }}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {edge.node.frontmatter.date}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {edge.node.frontmatter.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {edge.node.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </section>
      </Layout>
    </>
  )
}

export default Blog

export const blogQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "general" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 225)
          frontmatter {
            slug
            title
            date
            category
          }
        }
      }
    }
  }
`

// query MyQuery {
//   allMdx(filter: {frontmatter: {category: {eq: "general"}}}) {
//     edges {
//       node {
//         id
//         frontmatter {
//           slug
//           date
//           category
//         }
//       }
//     }
//   }
// }
