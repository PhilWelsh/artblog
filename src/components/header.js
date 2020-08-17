import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container header">
      <div className="header-brand">
        <AniLink fade to="/">
          w.
        </AniLink>
      </div>
      <nav className="nav-menu">
        <AniLink fade to="/blog">
          blog.
        </AniLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
