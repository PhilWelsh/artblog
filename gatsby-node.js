/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		resolve(
			graphql(
				`{
                allMarkdownRemark(sort:{fields: [frontmatter___date], order: DESC} limit: 500) {
                    edges {
                        node {
                            frontmatter {
                                slug
                                title
                            }
                            fields{
                                slug
                            }
                        }
                    }
                }
            }
            `
			).then((result) => {
				if (result.errors) {
					reject(result.errors);
				}
				createPage({
					path: '/blog',
					component: path.resolve('src/templates/blog-list-template.js')
				});
				const posts = result.data.allMarkdownRemark.edges;
				const blogPostTemplate = path.resolve('src/templates/blog-post.js');
				posts.forEach(({ node }, index) => {
					createPage({
						path: 'blog/' + node.frontmatter.slug,
						component: blogPostTemplate,
						context: {
							slug: node.frontmatter.slug,
							prev: index === 0 ? null : posts[index - 1].node,
							next: index === posts.length - 1 ? null : posts[index + 1].node
						}
					});
				});
			})
		);
	});
};
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: `slug`,
			value
		});
	}
};
