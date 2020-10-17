import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../index.scss"

export const BlogPost = ({
  html,
  frontmatter: { title, intro, date, image, slug },
}) => {
  const blogLink = `dailies/${slug}`
  return (
    <a href={blogLink}>
      <div key={slug} className="blog-card">
        <img src={image} alt={slug} />
        <div style={{ padding: "10px", color: "white" }}>
          <p>{title}</p>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </a>
  )
}

const BlogList = ({ location, data: { allMarkdownRemark } }) => {
  const allPosts = allMarkdownRemark.edges
  return (
    <Layout>
      <section className="hero-section">
        <div className="container">
          <div className="grid-two-col">
            <div>
              <h1>dailies</h1>
              <p>
                Welcome to my daily blog archive, new and old. Here i post my
                everyday tasks, achievements, or struggles as i face them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="first-section">
        <div className="blogposts-container container">
          {/* YO */}
          {allPosts.map(post => {
            return <BlogPost key={post.node.frontmatter.slug} {...post.node} />
          })}
        </div>
      </section>
    </Layout>
  )
}
export default BlogList

export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            slug
            intro
            image
          }
        }
      }
    }
  }
`
