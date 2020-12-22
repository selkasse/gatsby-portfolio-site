import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PortableText from "../components/portableText"

export default function BlogPost({ data }) {
  console.log(data.post)

  const post = data.post

  return (
    <Layout>
      <h1>{post.title}</h1>
      {post._rawBody && <PortableText blocks={post._rawBody} />}
    </Layout>
  )
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`
