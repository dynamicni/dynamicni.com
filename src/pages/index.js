import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import FrontHeader from "../components/front-header"

import "../styles/landing-page.css"

const IndexPage = (props) => (
  <>
    <FrontHeader />
    <div className="wrapper">
          
          <Img className="name-letters"
          fluid={props.data.logo.childImageSharp.fluid}
          objectFit="contain"  />
          
          <div className="name-words">
            <h1><i>Dynamic</i></h1>
            <h1><i>Public</i></h1>
            <h1><i>Affairs</i></h1>
          </div>
    </div>
  </>
)

export default IndexPage

export const query = graphql`
  query{
    logo: file(relativePath: {eq: "logo-letters.png"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
        
      }
    }
  }
`