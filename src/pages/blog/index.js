import React from 'react';
import { graphql, navigate } from 'gatsby';
import '../../styles/blog.css';
import '../../styles/global.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Layout from '../../components/Layout';

const Blog = ({ 
    data: {
      allMarkdownRemark: { 
        nodes 
      } 
    }
  }) => {
  nodes.forEach(node => console.log(node));
  return (
    <Layout>
      <div className="blog-front page">
        {
          nodes.map((node, idx) => (
            <Card key={idx} className="blog-card" elevation={0}>
              <CardActionArea onClick={() => {navigate(node.frontmatter.slug)}}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {node.frontmatter.date}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {node.frontmatter.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {node.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </div>
    </Layout>
  )
}

export default Blog;

export const blogQuery = graphql`
  query AllQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        excerpt(pruneLength: 250)
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }
`