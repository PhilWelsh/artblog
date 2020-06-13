import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, image, slug },
    },
  },
}) => {
  return (
    <Layout>
      <div className="blogpost newpost">
        <h1>{title}</h1>
        <img src={image} alt={title} />
      </div>
      <div dangerouselySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogTemplate
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        date
        slug
      }
    }
  }
`
