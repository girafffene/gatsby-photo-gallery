//imported dependencies
import React from "react"
import { graphql } from "gatsby"
//import styles
import { Header } from "semantic-ui-react"
//imported components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoGallery, { photoMapper } from "../components/Gallery"

const FlowersPage = ({ data }) => {
  const { edges } = data.allStrapiImages;
  const photos = photoMapper(edges);

  return (
    <Layout>
      <SEO title="Flowers" description="Flowers photo album" />
      <Header as="h1" style={{color: "maroon"}}>Flowers</Header>
      <PhotoGallery photos={photos} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiImages(filter: {tags: {name: {eq: "Flowers"}}}) {
      edges {
        node {
          url {
            childImageSharp {
              fixed(width: 960) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default FlowersPage