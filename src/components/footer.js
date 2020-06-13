import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaLinkedinIn, FaCodepen, FaFileAlt, FaEnvelope } from "react-icons/fa"

const Footer = ({ siteTitle }) => (
  <footer>
    <nav className="nav-menu">
      <a href="https://www.linkedin.com/in/welshphil/">
        <FaLinkedinIn />
        LinkedIn
      </a>
      <a href="https://codepen.io/philwelsh">
        <FaCodepen />
        CodePen
      </a>
      {/* <a href="/philwelsh-resume">
        <FaFileAlt />
        Resume
      </a> */}
      <a href="mailto:philwelsh3d@gmail.com">
        <FaEnvelope />
        Email
      </a>
    </nav>
    <div className="footer-brand">
      <h1 style={{ color: "#ffad1d" }}>philwelsh.</h1>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
