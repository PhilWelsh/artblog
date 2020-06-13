import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container header">
      <div className="header-brand">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            philwelsh.
          </Link>
        </h1>
      </div>
      <nav className="nav-menu">
        {/* 
        <h1><Link to="/art">art</Link>
        </h1> */}
        <h1>
          <Link to="/blog">blog</Link>
        </h1>
        <h1>
          <Link to="/art">art</Link>
        </h1>
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
