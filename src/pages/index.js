import React, { Component } from "react"
import ReactDOM from "react-dom"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "rc-calendar"
import "rc-calendar/assets/index.css"

const IndexPage = ({ data }) => {
  // const blogTitle = data.nlogPosts.title;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section">
        <div className="intro-card">
          <h2>Design. Create. Inspire.</h2>
          <p>
            Welcome to my site for blogging and posting my portfolio and
            works-in-progress
          </p>
        </div>
      </section>
      <section className="section-first" style={{ color: "white" }}>
        <div className="container">
          <h2 style={{ display: "inline" }}>About.</h2>
          <span style={{ display: "super" }}>(Thanks for caring)</span>
          {/* //scrolling interests/skills bar, on hover show some interest */}
          <div className="grid-text-space">
            <p>
              <br />
              I'm a graphic designer and web developer from the UK. I've worked
              in the UK, China and Canada, currently working and living (and
              loving it) in Toronto.
              <br />
              <br /> This website is about my resolution to learn and practice
              creative things and document them as i go. Keeping a regular pace
              and updating with my thoughts, ideas and most importantly the
              works that come from them.
            </p>
          </div>
          {/* <p>
          Design, Coding, Marketing, Art, Animation, 3d, teaching, gaming,
          language learning, teaching, entertainment,{" "}
        </p> */}
          {/* {blogTitle} */}
          {/* <BlogPosts /> */}
        </div>
      </section>
      <section className="section-second" style={{ color: "white" }}></section>
    </Layout>
  )
}

export default IndexPage
export const IndexBlogsQuery = graphql`
  query indexBlogs {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
