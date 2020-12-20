const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogResult = await graphql(`
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

  if (blogResult.errors) {
    throw blogResult.errors
  }

  const posts = blogResult.data.allSanityPost.edges || []
  posts.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: edge.node.slug.current },
    })
  })

  const projectResult = await graphql(`
    {
      allSanitySampleProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (projectResult.errors) {
    throw projectResult.errors
  }

  const projects = projectResult.data.allSanitySampleProject.edges || []
  projects.forEach((edge, index) => {
    const path = `/projects/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve(`./src/templates/project.js`),
      context: { slug: edge.node.slug.current },
    })
  })
}
