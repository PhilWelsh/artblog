import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../index.scss"

export const BlogPost = ({
  html,
  frontmatter: { title, intro, date, image, slug },
}) => {
  const blogLink = `blog/${slug}`
  return (
    <a href={blogLink}>
      <div key={slug} className="blog-card">
        <img src={image} />
        <div style={{ padding: "10px", color: "white" }}>
          <p>{title}</p>
          <a>Read more</a>
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
        <div className="intro-card">
          <h2>Blog</h2>
          <p>
            Welcome to my blog archive, new and old. Please find some interest
            in these somewhat random allotment of everyday tasks that i've done
          </p>
        </div>
      </section>
      <section className="section-first">
        <nav className="blog-tabs">
          <button>tab1</button>
          <button>tab2</button>
          <button>tab3</button>
          <button>tab4</button>
          <button>tab5</button>
        </nav>
        <div className="blogposts-container container">
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
