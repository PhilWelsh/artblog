import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = (data) => {
	// const titles = data.allContentfulBlog.edges.map((edge) => edge.node.title);
	const titles = data.data.allContentfulBlog.edges.map((edge) => edge.node.title);
	// console.log(titles);
	return (
		<Layout>
			<SEO title="Home" />
			<section>
				<h1>Hi people</h1>
				<p>Welcome to your new Gatsby site.</p>
				<p>Now go build something great.</p>
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					<Image />
				</div>
			</section>
			<section style={{ background: 'black' }}>
				<h1>BLOG</h1>
				<h2>{titles}</h2>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query blogs {
		allContentfulBlog {
			edges {
				node {
					title
				}
			}
		}
	}
`;
