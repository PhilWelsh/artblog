import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArtPage
