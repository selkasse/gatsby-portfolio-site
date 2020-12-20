import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  {
    allSanitySampleProject {
      edges {
        node {
          id
          slug {
            _key
            _type
            current
          }
          title
          mainImage {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default function Projects({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      <ul>
        {data.allSanitySampleProject.edges.map(({ node: project }) => (
          <li key={project.slug.current}>
            <h2>{project.title}</h2>
            <Img fluid={project.mainImage.asset.fluid} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
