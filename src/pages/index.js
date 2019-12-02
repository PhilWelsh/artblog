import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
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
		<section style={{ background: 'black' }} />
	</Layout>
);

export default IndexPage;

export const query = graphql`
	query HomePage {
		contentfulHomePage {
			title
			date
			content {
				content
			}
			image {
				file {
					url
				}
			}
		}
	}
`;
