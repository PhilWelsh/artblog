import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, intro, image, slug },
    },
  },
}) => {
  return (
    <Layout>
      <section className="hero-section">
        <div className="container">
          <h1>{title}</h1>
          <p>{intro}</p>
          <img src={image} alt={title} />
        </div>
      </section>
      <section>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
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
        intro
        image
        date
        slug
      }
    }
  }
`
