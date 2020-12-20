const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityPost.edges || []
  posts.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: edge.node.slug.current },
    })
  })
}
