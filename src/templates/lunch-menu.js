import React from "react"
import { graphql } from "gatsby"

const LunchMenu = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const lunchQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "lunch-menu"}}) {
      id
      frontmatter {
        menu {
          stuzzichini {
            title
            description
            price
          }
        }
      }
    }
  }
`

export default LunchMenu