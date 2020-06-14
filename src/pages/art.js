import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtPage = () => (
  <Layout>
    <SEO title="Art page " />
    <h1>Art & Development</h1>
    <section className="hero-section">
      <div className="intro-card">
        <p>
          This section is for anything i consider artworthy, be it code,
          animation or traditional art. To avoid perfectionism stopping me from
          completing my works, I will be posting not only finished 'portfolio'
          pieces but also works in progress. Until the changes to Instagram's
          API have been confirmed and worked through you can view my posts
          underneath
        </p>
      </div>
    </section>
    <section className="section-first">
      <div className="container">
        <a
          style={{ textAlign: "center" }}
          href="https://www.instagram.com/mintwelsh/"
        >
          Instagram Posts
        </a>
      </div>
    </section>
  </Layout>
)

export default ArtPage
