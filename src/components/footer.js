import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import { FaLinkedinIn, FaCodepen, FaEnvelope, FaFileAlt } from "react-icons/fa"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container footer">
      <div className="footer-brand">
        <AniLink fade to="/">
          w.
        </AniLink>
      </div>
      <nav className="nav-menu">
        <a href="mailto:philwelsh3d@gmail.com">
          <FaEnvelope />
          {/* Email */}
        </a>
        <a href="https://www.linkedin.com/in/welshphil/">
          <FaLinkedinIn />
          {/* LinkedIn */}
        </a>
        <a href="https://codepen.io/philwelsh">
          <FaCodepen />
          {/* CodePen */}
        </a>
        <a
          href="https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/philwelsh.com/philwelsh-cv-2020.pdf"
          download
        >
          <FaFileAlt />
          {/*Resume*/}
        </a>
        {/*<a href="/blog">
          <FaFileAlt />
          Blog
        </a>*/}
      </nav>
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
