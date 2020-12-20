import React from "react"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.allSanityPost.edges[0].node
  console.log(post._rawBody)

  return (
    <Layout>
      <h1>{post.title}</h1>
      {/* <p>{post.body.children.text}</p> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          slug {
            current
          }
          _rawBody
        }
      }
    }
  }
`
