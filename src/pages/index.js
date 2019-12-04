import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
	const blogPosts = data.allContentfulBlog.edges.map((edge) => edge.node);
	let newestPostNode = blogPosts[0];

	let { title, description, category, image } = newestPostNode;
	console.log(title);

	let NewestPost = () => <>
	<div className="blogpost newpost">
		<img src={image} alt={title}/>
				<div className="banner-corner-topleft">
					<h1>New Post</h1>
					</div>

		<h1>
			{title}
		</h1>
		<div className="">
			<p>{description}</p>
		</div>
	</div>
	</>;

	return (
		<Layout>
			<SEO title="Home" />
			<section className="newposts">
		<div className="container flex-center-h">
				<NewestPost /></div>
			</section>
			<section style={{ background: 'black' }}>
				<h1>BLOG</h1>
				{/* <h2>{newestPostNode.title}</h2> */}
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
					description
					category
					image
				}
			}
		}
	}
`;
