import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<div style={{ display: 'inline-block', padding: '20px', background: 'orange', marginRight: '5px' }} />
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`
				}}
			>
				PhilWelsh:
			</Link>
		</div>
		<nav>
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
