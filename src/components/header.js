import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header>
		<div className="header-brand">
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`
				}}
			>
				PhilWelsh_
			</Link>
		</div>
		<nav className="nav-menu">
			<Link to="/art">art</Link>
			<Link to="/blog">blog</Link>
			<Link to="/contact">contact</Link>
		</nav>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
