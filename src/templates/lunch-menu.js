import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Layout from '../components/Layout'


const LunchMenu = ({ data }) => {
  
  return (
    <Layout>
      <ul>
        {data.markdownRemark.frontmatter.menu.stuzzichini.map((item) => (
          <li>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <ul>
        {data.markdownRemark.frontmatter.menu.antipasti.map((item) => (
          <li>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <ul>
        {data.markdownRemark.frontmatter.menu.primi.map((item) => (
          <li>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const lunchQuery = graphql`
  {
    markdownRemark(frontmatter: {templateKey: {eq: "lunch-menu"}}) {
      id
      frontmatter {
        templateKey
        menu {
          stuzzichini {
            title
            description
            price
          }
          antipasti {
            title
            description
            price
          }
          primi {
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