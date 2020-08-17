import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "rc-calendar/assets/index.css"

const PortfolioPage = () => {
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
      <section className="section-first" style={{ color: "white" }}></section>
    </Layout>
  )
}

export default PortfolioPage
