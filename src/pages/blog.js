import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
          _rawExcerpt
        }
      }
    }
  }
`

export default function Blog({ data }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {data.allSanityPost.edges.map(({ node: post }) => (
          <li key={post.slug.current}>
            <Link to={post.slug.current}>
              <h2>{post.title}</h2>

              <p>{post._rawExcerpt[0].children[0].text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
