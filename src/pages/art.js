import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ArtPage = () => (
  <Layout>
    <SEO title="Art page " />
    <h1>Art Page</h1>
    <div>
      <Image />
    </div>
  </Layout>
)

export default ArtPage