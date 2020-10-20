import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "rc-calendar/assets/index.css"

export const PortfolioGraphicPost = () => {
  const blogLink = `/`
  return (
    <a href={blogLink}>
      <div key={"key"} className="graphic-card">
        <img src={"../../images/pwlogo.png"} alt={"slug"} />
        <div style={{ padding: "10px", color: "white" }}>
          <p>{"title"}</p>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </a>
  )
}

const PortfolioPage = () => {
  // const all PortfolioGraphicPosts = []
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section">
        <div className="container">
          <div className="grid-two-col">
            <div>
              <h1>Portfolio</h1>
              <p>
                An archive of my best or most relevant completed projects
                created for clients or as personal projects
              </p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="#graphics">graphics</a>
                </li>
                <li>
                  <a href="#web">web</a>
                </li>
                {/*CREATE OTHER <li>
                  <a href="#other">other</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="first-section web-section">
        <div className="container">
          <div className="grid-two-col">
            <div className="split">
              <div>
                <h1>Web</h1>
                <p>websites i dun made</p>
              </div>
            </div>
            <div className="split">
              {/* {allPosts.map(post => {
                return (
                  <PortfolioGraphics
                    key={post.node.frontmatter.slug}
                    {...post.node}
                  />
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="portfolio"></div>
        </div>
      </section>
      <section className="first-section graphics-section">
        <div className="container">
          <div className="grid-two-col">
            <div className="split">
              <div>
                <h1>Graphics</h1>
                <p>Graphics i dun made</p>
              </div>
            </div>
            <div className="split">
              {/* {allPosts.map(post => {
                return (
                  <PortfolioGraphics
                    key={post.node.frontmatter.slug}
                    {...post.node}
                  />
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="portfolio"></div>
        </div>
      </section>
      {/* TODO CREATE MORE OTHER
      <section className="first-section other-section">
        <div className="container">
          <div className="grid-two-col">
            <div className="split">
              <div>
                <h1>Other</h1>
                <p>Other stuff i dun made</p>
              </div>
            </div>
            <div className="split">
              {/* TODOD {allPosts.map(post => {
                return (
                  <PortfolioGraphics
                    key={post.node.frontmatter.slug}
                    {...post.node}
                  />
                )
              })} END TODO /}
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container">
          <div className="portfolio"></div>
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioPage
