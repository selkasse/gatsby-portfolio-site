import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  // const post = data.allSanityPost.edges[0].node
  // console.log(post._rawBody[0].children)
  // let bodyText = ""
  // post._rawBody[0].children.forEach(child => {
  //   bodyText += child.text
  // })

  // console.log(bodyText)

  return (
    <Layout>
      {/* <h1>{post.title}</h1>
      <p>{bodyText}</p> */}
      <h1>Placeholder for now</h1>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String) {
//     allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
//       edges {
//         node {
//           title
//           slug {
//             current
//           }
//           _rawBody
//         }
//       }
//     }
//   }
// `

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
